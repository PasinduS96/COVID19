import React, { useEffect, useState } from "react";
import { getLocal } from "../../service";
import CountUp from "react-countup";
import "../style.css";

export default function Index() {
  const style = {
    marginLeft: "0 auto",
    marginRight: "0 auto",
    marginBottom: "15%",
    marginTop: "10%"
  };

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getLocal().then(result => {
      setHospitals(result.data.hospital_data);
    });
  }, []);

  return (
    <div style={style}>
      <h3 className="text-center">
        ශ්‍රි ලංකාවේ රෝහල් ආශ්‍රිත රෝගය පිළිබද සැකපිට නේවාසිකව ප්‍රතිකාර ලබන්නන්
        සහ
      </h3>
      <h3 className="text-center">පරික්ශාවට ලක්වු පිරිස</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <br />
        <table class="table table-borderless table-hover table-responsive-xl">
          <thead>
            <tr>
              <th scope="col">රෝහ​ල</th>
              <th scope="col">පරික්ෂාවට ලක්වු රෝගීන්</th>
              <th scope="col">නේවාසික රෝගීන්</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((item, i) => {
              return (
                <tr>
                  <td>{item.hospital.name_si}</td>
                  <td className="text-center">
                    {" "}
                    <CountUp end={item.cumulative_total} />
                  </td>
                  <td className="text-center">
                    <CountUp end={item.treatment_total} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
