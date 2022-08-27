const Noticias: React.FC = () => {
    return (
      <div className="container">
        <iframe src="https://digesett.gob.do/index.php/noticias/rss" style= {{border:"0px #ffffff none"}} name="myiFrame" scrolling="no"   height="700px" width="400px"></iframe>
      </div>
    );
  };
  
  
  export default Noticias;