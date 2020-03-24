import React, { useEffect, useState } from "react";
import "../style.css";
import CountUp from "react-countup";
import { getAWS, getLocal } from "../../service";

const Index = props => {
  const [confirmed, setConfirmed] = useState("");
  const [deceased, setDeceased] = useState("");
  const [doubt, setDoubt] = useState("");
  const [prev, setPrev] = useState(0);
  const [critical, setCritical] = useState(0);
  const [recovered, setRecovered] = useState("");
  const [tested, setTested] = useState("");

  useEffect(() => {
    getAWS().then(data => {
      setConfirmed(data.daily[data.daily.length - 1].confirmed);
      setDeceased(data.daily[data.daily.length - 1].deceased);
      setPrev(data.daily[data.daily.length - 2].confirmed);
      setCritical(data.daily[data.daily.length - 1].critical);
      setRecovered(data.daily[data.daily.length - 1].recovered);
      setTested(data.daily[data.daily.length - 2].tested);
    });

    getLocal().then(data => {
      setDoubt(data.data.local_total_number_of_individuals_in_hospitals);
    });
  }, []);

  const newCases = () => {
    console.log(confirmed);

    return confirmed - prev;
  };

  return (
    <div class="card-group" style={{ marginTop: "8rem", marginLeft: "auto" }}>
      <div
        class="card text-white text-center bg-danger"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">සක්‍රිය රෝගීන්</h5>
          <h1 class="card-text">
            <CountUp end={confirmed} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white text-center bg-dark"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">හදුනාගත් නව ආසාදිත රෝගීන්</h5>

          <h1 class="card-text">
            <CountUp end={newCases()} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white text-center bg-secondary"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">මරණ</h5>
          <h1 class="card-text">
            <CountUp end={deceased} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white text-center bg-primary"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">අසාධ්‍ය රෝගීන්</h5>
          <h1 class="card-text">
            <CountUp end={critical} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white text-center bg-success"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">සුවයට පත් රෝගීන්</h5>
          <h1 class="card-text">
            <CountUp end={recovered} />
          </h1>
        </div>
      </div>
      <div
        class="card text-white text-center bg-info"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">පරික්ෂාවට පත් රෝගීන්</h5>
          <h1 class="card-text">
            <CountUp end={tested} />
          </h1>
        </div>
      </div>

      <div
        class="card text-center text-white"
        text-center
        style={{ minWidth: "18rem", backgroundColor: "#F1C40F" }}
      >
        <div class="card-body">
          <h5 class="card-title">සැක සහිත රෝගීන්</h5>
          <h1 class="card-text">
            <CountUp end={doubt} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
