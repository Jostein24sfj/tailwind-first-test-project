import "./App.css";
import CarImg from "./components/CarImg";
import CarInfo from "./components/CarInfo";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <CarInfo />
      <CarImg />
      <div className="min-h-screen"></div>
    </>
  );
}
