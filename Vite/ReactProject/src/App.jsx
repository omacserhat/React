import "./App.css";

function App() {
  const nameSurname = "Serhat Omaç";
  const students = 50000;
  const dogruMu = true;
  const date = "date";
  const imageUrl = "https://picsum.photos/250/250";
  /* True - False - Undefined değerleri tarayıcıda gösterilmez, koşul amaçlı kullanılabilir. Örn: if data == dogruMu */

  return (
    // part1 sayfadaki yazım kuralları

    //<div>
    //   <h1>AD SOYAD : {nameSurname}</h1>
    //   <p>Öğrenci Sayısı: {students}</p>
    //   <input type="text" />
    //   {dogruMu ? <p>Doğru</p> : <p>Yanlış</p>}
    //   <input type={date} />
    //   <img src={imageUrl} alt="" />
    // </div>

    // part2 classlı kullanma

    // <div className="box"></div>

    //part3 inlineCss

    <div style={{
      width:'250px',
      height:'250px',
      backgroundColor:'blue',
      fontSize:'30px'
    }}></div>
  );
}

export default App;
