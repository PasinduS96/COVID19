import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VectorMap } from "@south-paw/react-vector-maps";

import world from "./world.json";
import { getAWS, getLocal } from "../../service";

const Mapz = styled.div`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #27ae60;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      // When a layer is focused.
      // &:focus {
      //   fill: rgba(168, 43, 43, 0.6);
      // }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(56, 43, 168, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(56, 43, 168, 0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56, 43, 168, 0.6);
      }
    }
  }
`;

const Maps = props => {
  const style = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "100%",
    marginBottom: "8%",
    marginToo: "20%"
  };

  const [hovered1, setHovered1] = useState("All Island");
  const [hovered, setHovered] = useState("None");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAWS().then(data => {
      setData(data.prefectures);
      setTotal(data.prefectures[0].cases);
      setHovered(data.prefectures[0].cases);
    });
  }, []);

  const getCases = district => {
    data.map(data => {
      if (data.prefecture === district) {
        setHovered(data.cases);
        setHovered1(data.prefecturesi);
      }
    });
  };

  const layerProps = {
    onMouseEnter: ({ target }) => {
      setHovered1(target.attributes.name.value);
      getCases(target.attributes.name.value);
    },
    onMouseLeave: ({ target }) => {
      setHovered1("All Island");
      setHovered(total);
    }
  };

  return (
    <div style={style} align="left">
      ‍
      <div className="text-center">
        <h3>ශ්‍රි ලංකාවේ දිස්ත්‍රික් අනුව වාර්තාගත රෝගීන්</h3>
        <small>
          (අවශ්‍ය දිස්ත්‍රික්කය වෙත මවුසය රැගෙන යාමෙත් / ස්පර්ශ කිරිමෙන් අවශ්‍ය
          තොරතුරු දර්ශනය​වේ)
        </small>
      </div>
      <br />
      <Mapz>
        <VectorMap {...world} layerProps={layerProps} />
        <hr />
        <h5 className="text-center">
          දිස්ත්‍රික්කය:{" "}
          {hovered1 && <code style={{ marginLeft: 10 }}>{hovered1}</code>}
          <br />
          දැනට තහවුරු කරගත් රෝගීන්:{" "}
          {hovered && <code style={{ marginLeft: 10 }}>{hovered}</code>}
        </h5>
      </Mapz>
    </div>
  );
};

export default Maps;
