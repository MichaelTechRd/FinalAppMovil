const Horoscopo: React.FC = () => {
    return (
      <div className="container">
        <iframe src="https://www.horoscopo.com/" style={{border:"0px #ffffff none;"}} name="myiFrame" scrolling="no" height="700px" width="400px" ></iframe>
      </div>
    );
  };
  
  
  export default Horoscopo;