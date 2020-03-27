import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getAWS, getLocal } from "../../service";
import moment from "moment";

const Index = props => {
  const [confirmed, setConfirmed] = useState(0);
  const [deceased, setDeceased] = useState(0);
  const [doubt, setDoubt] = useState(0);
  const [prev, setPrev] = useState(0);
  const [critical, setCritical] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [tested, setTested] = useState(0);
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [time, setTime] = useState("");
  const [newC, setNewC] = useState("");

  useEffect(() => {
    getAWS().then(data => {
      setDeceased(data.daily[data.daily.length - 1].deceased);
      setArr(arr.push(data.daily[data.daily.length - 1].deceased));
      setPrev(data.daily[data.daily.length - 2].confirmed);
      setCritical(data.daily[data.daily.length - 1].critical);
      setRecovered(data.daily[data.daily.length - 1].recovered);
      setTested(data.daily[data.daily.length - 2].tested);
      setTime(data.updated[0].lastupdated);
    });

    getLocal().then(data => {
      setDoubt(data.data.local_total_number_of_individuals_in_hospitals);
      setNewC(data.data.local_new_cases);
      setConfirmed(data.data.local_active_cases);
    });
  }, []);

  const datasetting = (first, second, third, fourth, fifith, last) => {
    setData({
      labels: [
        "සක්‍රිය රෝගීන්",
        "නව ආසාදිත රෝගීන්",
        "මරණ",
        "අසාධ්‍ය රෝගීන්",
        "සුවයට පත් රෝගීන්",
        "සැක සහිත රෝගීන්"
      ],
      datasets: [
        {
          label: "නව කොරොනා වෛරසයේ ව්‍යාප්තිය",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 206, 86, 1)"
          ],
          data: [first, second, third, fourth, fifith, last],
          borderWidth: 2
        }
      ]
    });
  };

  useEffect(() => {
    datasetting(confirmed, newC, deceased, critical, recovered, doubt);
  });

  console.log(time);

  return (
    <div
      style={{
        width: "100%",
        height: "70%",
        marginLeft: "0 auto",
        marginRight: "0 auto",
        marginTop: "2rem",
        marginBottom: "15%"
      }}
    >
      <div className="text-center">
        <h3>දැනට නිකුත් වු දත්ත අනුව COVID 19 ව්‍යාප්ති සටහන</h3>
        <h6>අවසන් වරට දත්ත ලැබුනු වේලාව {time}</h6>
      </div>

      <br />
      <Bar
        options={{
          responsive: true
        }}
        data={data}
      />
    </div>
  );
};

export default Index;
