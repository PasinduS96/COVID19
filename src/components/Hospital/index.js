import React, { useEffect, useState } from "react";
import { getLocal } from "../../service";
import CountUp from "react-countup";

export default function Index() {
  const style = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5rem",
    marginBottom: "8rem"
  };

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getLocal().then(result => {
      setHospitals(result.data.hospital_data);
    });
  }, []);

  return (
    <div align="right" style={style}>
      <h3 className="text-center">
        ශ්‍රි ලංකාවේ රෝහල් ආශ්‍රිත රෝගය පිළිබද සැකපිට නේවාසිකව ප්‍රතිකාර ලබන්නන්
        සහා
      </h3>
      <h3 className="text-center">පරික්ශාවට ලක්වු පිරිස</h3>
      <br />
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">රෝහ​ල</th>
            <th scope="col">පරික්ෂාවට ලක්වු රෝගින්</th>
            <th scope="col">නේවාසික රෝගින්</th>
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
  );
}
