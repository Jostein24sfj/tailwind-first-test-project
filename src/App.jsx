import "./App.css";
import CarImg from "./components/CarImg";
import CarInfo from "./components/CarInfo";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-[70vh]"></div>
        <CarInfo />
        <CarImg />
        <div className="min-h-[70vh]"></div>
      </main>
    </>
  );
}
