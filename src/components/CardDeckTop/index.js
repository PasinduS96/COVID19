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
    return confirmed - prev;
  };

  return (
    <div className="margin card-deck" align="left">
      <div class="card text-white bg-danger mb-4" style={{ minWidth: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">සක්‍රිය රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={confirmed} />
          </h1>
        </div>
      </div>

      <div class="card text-white bg-dark mb-3" style={{ minWidth: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">නව ආසාදිත රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={newCases()} />
          </h1>
        </div>
      </div>

      <div class="card text-white bg-info mb-3" style={{ minWidth: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">මරණ</h5>
          <h1 class="card-text">
            <CountUp end={deceased} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white bg-primary mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">අසාධ්‍ය රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={critical} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white bg-success mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">සුවයට පත් රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={recovered} />
          </h1>
        </div>
      </div>
      <div
        class="card text-white bg-secondary mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">පරික්ෂාවට පත් රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={tested} />
          </h1>
        </div>
      </div>

      <div
        class="card text-white bg-warning mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">සැක සහිත රෝගින්</h5>
          <h1 class="card-text">
            <CountUp end={doubt} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
