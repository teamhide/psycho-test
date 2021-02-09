import './index.css';
import MoneyImg from '../../../assets/money.png';
import DollarImg from '../../../assets/dollar.png';
import ToothImg from '../../../assets/tooth.png';
import { useState, useEffect } from 'react';
import publicIp from 'public-ip';
import Loader from "react-loader-spinner";
import ReactTypingEffect from 'react-typing-effect';
import { CopyToClipboard } from 'react-copy-to-clipboard'

function NewYearMoney({match}) {
  const [ stage, setStage ] = useState(0);
  const [ age, setAge ] = useState(null);
  const [ secret, setSecret ] = useState(null);
  const createKakaoButton = () => {
    console.log(4444444)
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("9e70695ec98201ad6dd4f3a944e9d211")
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }

  const onClickStartButton = () => {
    setStage(1);
  }

  const onClickAge = (age) => {
    setAge(age);
    setStage(2);
    setTimeout(() => {
      setStage(3);
    }, 3000);
  }

  const getIp = (async () => {
    try {
      let result = 0;
      let ip = await publicIp.v4();
      ip.split(".").map((n) => {
        result += Number(n);
      })
      setSecret(result);
    } catch(err) {
      setSecret(Number(Math.floor(Math.random() * 100)));
    }
  })

  const calculateMoney = () => {
    const rand = Math.floor(Math.random() * 100);
    let result = Math.floor(secret / age);
    let today = new Date();
    let date = today.getDate();

    if (age == 40) {
      return
    }

    if (result == 17) {
      return 150
    } else if (Number(result) === Number(date)) {
      return 200
    } else if (Number(result) === Number(rand)) {
      return 300
    }
    return result;
  }

  const calculateResultText = () => {
    if (age == 10) {
      return (
        <>
          <p style={{fontSize: 30, fontWeight: 700}}>{calculateMoney()} 만원</p>
          <span style={{fontSize: 20, marginBottom: 10}}>어린이 여러분</span>
          <span style={{fontSize: 20, marginBottom: 10}}>요즘도 세뱃돈으로 장난감 사시나요?</span>
          <span style={{fontSize: 20, marginBottom: 10}}>삼성전자 몰빵이 답입니다.</span>
          <span style={{fontSize: 20}}>삼전 가즈아~!</span>
        </>
      )
    } else if (age == 20) {

    } else if (age == 30) {

    } else if (age == 40) {
      return (
        <>
          <p style={{fontSize: 30, fontWeight: 700}}>0원</p>
          <span style={{fontSize: 20}}>이젠..주셔야죠?</span>
        </>
      )
    }
  }

  const calculateResultImg = () => {
    if (age == 40) {
      return <img src={ToothImg} height={200} width={250}/>
    }
    return <img src={DollarImg} height={200} width={250}/>
  }

  useEffect(() => {
    document.title = "새뱃돈 예측기"
    getIp();
    // createKakaoButton();
  }, []);

  return (
    <section>
      <div className="section">
        { stage === 0 ? (
          <div className="first-stage">
            <span className="title-first">내가 받을 새뱃돈은?</span>
            <span className="title-second">올해는 얼마나 받을까..!</span>
            <div className="section-body">
              <img src={MoneyImg} height={200} width={250}/>
              <button className="button" onClick={onClickStartButton}>새뱃돈 측정하기</button>
            </div>
          </div>
        ) : [
          stage === 1 ? (
            <div className="second-stage">
              <span className="title-first">나의 연령대는</span>
              <div className="question-box">
                <div className="question" onClick={() => onClickAge(10)}>
                  1~19세
                </div>
                <div className="question" onClick={() => onClickAge(20)}>
                  20대
                </div>
                <div className="question" onClick={() => onClickAge(30)}>
                  30대
                </div>
                <div className="question" onClick={() => onClickAge(40)}>
                  40대 이상
                </div>
              </div>
            </div>
          ) : [
            stage === 2 ? (
              <div className="third-stage">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={150}
                  width={150}
                  // timeout={3000} //3 secs
                />
                <ReactTypingEffect
                  className="typing"
                  text={["예측중....."]}
                  speed={200}
                  eraseDelay={1000}
                  typingDelay={100}
                />
              </div>
            ) : (
              <div className="result-stage">
                { calculateResultImg() }
                { calculateResultText() }
                <div className="result-btn-wrap">
                  <button className="retry-btn" onClick={() => setStage(0)}>다시하기</button>
                  <CopyToClipboard 
                    text={"https://teamhide.github.io/psycho-test"}
                    onCopy={() => alert("링크 복사 완료!")}
                  >
                    <button className="copy-btn">링크복사</button>
                  </CopyToClipboard>
                </div>
              </div>
            )
          ]
        ]}
      </div>
    </section>
  )
}

export default NewYearMoney;