import { useSelector, useDispatch } from "react-redux";
import React, { lazy, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Input, Select, DatePicker, Modal, Button, Space, Table } from "antd";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
// import "./video-react.css"; // import css
import CIcon from "@coreui/icons-react";
// import { Player, ControlBar } from 'video-react';
import ReactPlayer from "react-player";
import { Image } from "antd";
import { ImageMap } from "@qiuz/react-image-map";
import MainChartExample from "../charts/MainChartExample.js";
import { useHistory } from "react-router-dom";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = () => {
  const [anggota, setAnggota] = useState(false);
  const [file, setFile] = useState("");
  // const [playing,setPlaying] = useState(false);
  const dispatch = useDispatch();
  const [jadwal, setJadwal] = useState("none");
  const [pejet, setPejet] = useState("");
  const [pejet2, setPejet2] = useState("none");
  const [pejet3, setPejet3] = useState("none");
  const [pejet4, setPejet4] = useState("none");
  const [pejet5, setPejet5] = useState("none");
  const [layar1, setLayar1] = useState(0);
  const [layar2, setLayar2] = useState(0);
  const [layar3, setLayar3] = useState(0);
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota1, setAnggota1] = useState();
  const [paymentstatus, setPaymentstatus] = useState("PAY");
  const [workshopku, setWorkshopku] = useState("");

  let history = useHistory();
  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }
  useEffect(() => {
    dispatch({ type: "set", sidebarShow: false });
    const script = document.createElement("script");
    script.src = "/perki.js";
    script.async = true;
    if (localStorage.getItem("status") == "ANGGOTA") {
      setAnggota(true);
    } else setAnggota(false);

    document.body.appendChild(script);

    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);
    var anggotast = localStorage.getItem("status");
    if (anggotast == "ANGGOTA") {
      setAnggota(true);
    } else setAnggota(false);
    setNama(localStorage.getItem("nama"));

    var mtd2 = "";
    if (anggotast == "ANGGOTA") {
      mtd2 = "ANGGOTA2";
    } else {
      mtd2 = "ANGGOTA";
    }

    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: mtd2, idsponsor: idsponsor },
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        var temp1 = data.data[0].paymentstatus;
        // setAnggota1(data.data[0]);
        setPaymentstatus(temp1);
        // setWorkshopku(data.data[0].workshop);
      })
      .catch(() => {
        console.log("Internal server error");
      });

    // axios({
    //   method: "POST",
    //   url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    //   // url: "http://localhost/perki/kirimdata.php",
    //   data: {"var":"hallmp4","mtd":'CEKOPTION'},
    //   contentType: "application/json",
    // })
    //   .then((data) => {
    //     console.log(data.data.data);
    //     setFile(data.data.data);
    //     // setTimeout(() => {
    //     //   setPlaying(true);
    //     //   console.log("play");
    //     // }, 2000)
    //   })
    //   .catch(() => {
    //     console.log('Internal server error');
    //   });
    // handlePlayVideo();
  }, []);

  const openInNewTab = (url) => {
    window.open(url);
    // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    // if (newWindow) newWindow.opener = null
  };

  const jadwalku = (value) => {
    setJadwal(value);
  };

  const onClikHall = (area, index: number) => {    
    if (index == 0) {
      console.log("exhibition");
      history.push("/theme/exhibition");
    }    
    if (index == 1) {
      history.push("/theme/symposium");
    }
    if (index == 2) {
      history.push("/theme/workshop");
    }    
  };

  const onClikMenu = (area, index: number) => {            
    if (index == 1) {
      setPejet("SESSION");
      history.push("/theme/session");
    }
    if (index == 2) {
      setPejet("EXHIBITION");
      history.push("/theme/exhibition");
    }
    if (index == 3) {
      setPejet("EXIT");
      history.push("/theme/login");      
    }
    if (index == 4) {
      setPejet("SYMPOSIUM");      
      history.push("/theme/symposium");      
    }
    if (index == 5) {
      setPejet("ACCOUNT");
      console.log("akun");
      history.push("/theme/sponsor");
    }
    if (index == 6) {
      setPejet("WORKSHOP");
      history.push("/theme/workshop");
    }     
  };

  const onClikFaq = (area, index: number) => {    
    if (index == 0) {
      history.push("/theme/faq");
    }
  };

  const onClikWa = (area, index: number) => {    
    if (index == 0) {
      openInNewTab("https://wa.me/6282232683785");
    }    
  };

  const mapAreamobile: any[] = [
    //0
    {
      left: "5.5%",
      top: "30%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //1
    {
      left: "5.5%",
      top: "55%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //2
    {
      left: "86.5%",
      top: "80.8%",
      height: "20%",
      width: "10%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //3
    {
      left: "50.5%",
      top: "30%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //4
    {
      left: "50.5%",
      top: "55%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //5
    {
      left: "50.5%",
      top: "6%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //6
    {
      left: "50.5%",
      top: "6%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //7
    {
      left: "50.5%",
      top: "6%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "1" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //8
    {
      left: "76.5%",
      top: "80%",
      height: "15%",
      width: "10%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "5" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //9
    {
      left: "50.5%",
      top: "6%",
      height: "22%",
      width: "44%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //10
    {
      left: "65.5%",
      top: "80%",
      height: "15%",
      width: "10%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
  ];

  const mapAreaHall: any[] = [       
    //0
    //exhibition
    {
      width: "8.6%",
      height: "15.5%",
      left: "27.8%",
      top: "26%",      
      style: {
        background: "rgba(0, 0, 255, " + layar1 + ")",
        transform: "rotate(2deg)",
        zIndex: "8",
        display: "block",
        cursor: "pointer",
      },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
        setLayar3(0);
      },
      render: (area: any, index: number) => (
        <span>         
        </span>
      ),
    },
    //1
    //simposium
    {
      width: "10.7%",
      height: "15.5%",
      left: "44.5%",
      top: "25.5%",
      style: {
        background: "rgba(0, 0, 255, " + layar2 + ")",
        zIndex: "8",
        display: "block",
        cursor: "pointer",
      },
      onMouseOver: () => {
        setLayar2(0.3);
        setLayar3(0);
        setLayar1(0);
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //2
    //workshop
    {
      width: "9%",
      height: "16%",
      left: "63.4%",
      top: "25.8%",    
      style: {
        transform: "rotate(-2deg)",
        cursor: "pointer",
        background: "rgba(0, 0, 255, " + layar3 + ")",
        zIndex: "8",
        display: "block",
      },
      onMouseOver: () => {
        setLayar3(0.3);
        setLayar2(0);
        setLayar1(0);
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //3
    {
      width: "14.1%",
      height: "20.5%",
      left: "43%",
      top: "-3.8%",
      style: {
        background: "rgba(0, 0, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      //      href: "https://google.com",
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>         
          <ReactPlayer
            className="react-player"
            url="https://acsasurabaya2021.com/wp-content/uploads/2021/10/movie.mp4"
            width="100%"
            height="100%"
            volume="0.2"
            playsInline
            playing={false}
            loop
            controls={true}
            autoPlay={false}
          />
        </span>
      ),
    }
  ];

  const mapAreaMenu: any[] = [
    //0
    {
      left: "20.7%",
      top: "-136px",
      height: "100%",
      width: "8.3%",
      href: "https://google.com",
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "8" },
      onMouseOver: () => setPejet("LOBBY"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "LOBBY" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Lobby_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //1
    {
      left: "29.2%",
      top: "-136px",
      height: "100%",
      width: "8.2%",
      // href: "https://google.com",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("SESSION"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "SESSION" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Session_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //2
    {
      left: "37.5%",
      top: "-136px",
      height: "100%",
      width: "8.2%",
      // href: "https://google.com",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("EXHIBITION"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "EXHIBITION" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Exhibition_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //3
    {
      left: "71.2%",
      top: "-136px",
      height: "100%",
      width: "8.1%",      
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("EXIT"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "EXIT" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Exit_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //4
    {
      left: "46%",
      top: "-136px",
      height: "100%",
      width: "8%",
      // href: "https://google.com",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("SYMPOSIUM"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "SYMPOSIUM" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Symposium_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //5
    {
      left: "62.7%",
      top: "-136px",
      height: "100%",
      width: "8%",
      // href: "https://google.com",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("ACCOUNT"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "ACCOUNT" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Account_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },         
    //15
    {
      left: "54%",
      top: "-136px",
      height: "100%",
      width: "8.5%",
      href: "https://google.com",
      onMouseOver: () => setPejet("WORKSHOP"),
      style: {
        background: "rgba(0, 255, 0, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      render: (area: any, index: number) => (
        <span>
          {pejet == "WORKSHOP" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Workshop_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
  ];

  const mapAreaWa: any[] = [
    //0
    {
      width: "9.1%",
      height: "91%",
      left: "7.7%",
      top: "-262px",      
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "8" },
      onMouseOver: () => setPejet("WA"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "WA" ? (
            <img
              src="./00_BUTTON/WA_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    }   
  ];

  const mapAreaFAQ: any[] = [
    //0
    {
      width: "10%",
      height: "91%",
      left: "82.4%",
      top: "-365px",      
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "8" },
      onMouseOver: () => setPejet("FAQ"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "FAQ" ? (
            <img
              src="./00_BUTTON/FAQ_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    }   
  ];


  return (
    <>
      <div>
        {anggota && paymentstatus == "PAY" ? (
        <div>
          <div class="visibledesktop" style={{height: '86vh', overflow: 'hidden', marginTop: '-23px'}}>
            <ImageMap
              className="usage-map"
              src={
                "./00_BUTTON/Hall4K_rev4_edit.png"
              }
              map={mapAreaHall}
              style={{
                width: "90%",
                position: "relative",
                left: "50%",
                zIndex: 1,
                transform: "translate(-50%, -24px)",
              }}
              onMapClick={onClikHall}
            />
            <ImageMap
              className="usage-map"
              src={
                "./00_BUTTON/MAIN_BUTTON copy.png"
              }
              map={mapAreaMenu}
              style={{
                width: "59.5%",
                position: "relative",
                left: "50%",
                zIndex: 1,
                transform: "translate(-50%, -144px)",
              }}
              onMapClick={onClikMenu}
            />
            <ImageMap
              className="usage-map"
              src={
                "./00_BUTTON/WA_Button.png"
              }
              map={mapAreaWa}
              style={{
                width: "9%",
                position: "relative",
                left: "7.8%",
                bottom: "262px",
                zIndex: 1,                  
              }}
              onMapClick={onClikWa}
            />
            <ImageMap
              className="usage-map"
              src={
                "./00_BUTTON/FAQ_Button.png"
              }
              map={mapAreaFAQ}
              style={{
                width: "10%",
                position: "relative",
                left: "82.4%",
                bottom: "365px",
                zIndex: 1,                  
              }}
              onMapClick={onClikFaq}
            />
          </div>
          <div class="visibledevice">
            <ImageMap
              className="usage-map"
              src={
                "./00_BUTTON/Hall4K_rev3_edit.jpg"
              }              
              style={{
                width: "100%",
                position: "relative",                
              }}
              onMapClick={onClikHall}
            />
            <ImageMap
              className="usage-map"
              src={
                "https://acsasurabaya2021.com/wp-content/plugins/perki/Mobile Button.png"
              }
              map={mapAreamobile}
              style={{
                width: "100%",
                position: "relative",                
              }}
              onMapClick={onClikHall}
            />
          </div>
        </div>
        ) : anggota && paymentstatus != "PAY" ? (
          <div style={{ fontSize: "25px", marginLeft: "15px" }}>
            Mohon klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">
              di sini
            </a>{" "}
            - Next - Pay untuk melakukan pembayaran untuk mengaktifkan akun.
            Klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">
              di sini
            </a>{" "}
            untuk exit.{" "}
          </div>
        ) : !anggota ? (
          <div style={{ fontSize: "25px", marginLeft: "15px" }}>
            Mohon klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">
              di sini
            </a>{" "}
            untuk menambah anggota. Klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">
              di sini
            </a>{" "}
            untuk exit.
          </div>
        ) : null}
      </div>     
    </>
  );
};

export default Dashboard;
