import React from "react";
import banner from "../../img/covid-19-coronavirus-symptoms_1820px-.jpeg";

export default function what() {
  return (
    <div style={{ fontSize: "20px", padding: "40px" }}>
      <img
        src={banner}
        alt="Covid"
        style={{
          marginLeft: "0 auto",
          marginRight: "0 auto",
          width: "100%",
          marginBottom: "40px"
        }}
      />
      <p>
        නව කොරෝනා වෛරසයේ පොදු රෝග ලක්ෂණ නම්
        <ul
          class="list-group list-group-flush"
          style={{
            width: "300px"
          }}
        >
          <li class="list-group-item">උ​ණ</li>
          <li class="list-group-item">ශ්වසන අපහසුතා</li>
          <li class="list-group-item">කැස්ස සහ උගුරේ අපහසුතා</li>
          <li class="list-group-item">හිසරද​ය</li>
          <li class="list-group-item">මස්පිඩු වේදනා</li>
          <li class="list-group-item">ඔක්කාරය</li>
          <li class="list-group-item">වමනය</li>
          <li class="list-group-item">වෙව්ලිම හා ⁣සෙම ගතිය</li>
        </ul>
      </p>
      <p>
        මෙම රෝග ලක්ෂණ වේ නම් ඔබටද නව කොරෝනා වෛරසය ආසාදනය වී තිබි​මේ
        සම්භා​විතාවක් පවති. එසේ වේ නම් වාහම ඔබ පරික්ෂණ සදහා යොමු වීම සුදුසුය. ඒ
        සදහා ඔබ නිවසින් බැහැරව වෛද්‍ය මධ්‍යස්ථාන වෙත හෝ රෝහල් වෙත නොයා 1990 අමතා
        ගිලන් රථයක් මාර්ගයෙන් අදාල රෝහල වෙත යාම හෝ 113 / 117 අංක අමතා අදාල
        උපදෙස් පිලිපැදිම කල යුතුය.
      </p>
    </div>
  );
}
