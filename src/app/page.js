import styles from "./home.module.css";
import Slider from "./slider/Slider";
import Cogweels from "./components/cogweels";


const Home = () => {
  return (
    <div className="container">
      <Slider
        name={[
          "Calculator",
          "Drum Machine",
          "Promodo Timer",
          "Random Quote Genarator",
          "Markdown Previewer",
        ]}
        link={[
          "/tools/Calculator",
          "/tools/DrumMachine",
          "/tools/PromodoTimer",
          "/tools/RandomQuote",
          "/tools/MarkdownPreview",
        ]}
        image={["/cal.jpg", "/drum.jpg", "/timer.jpg", "/randomQ.jpg","/markdown.jpg"]}
      />
      <h1 className={styles.heading}>Awesome Tools</h1>
      <div className={styles.para}>
        <p>Discover New Tools</p>
        <p>Use them with Ease</p>
      </div>
      <Cogweels />
    </div>
  );
};

export default Home;
