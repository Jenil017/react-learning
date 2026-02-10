import Card from "./Components/Card";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <Card
          image="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
          company="Amazon"
          days="5"
          position="Software Engineer"
          tag1="Full-Time"
          tag2="Senior Level"
          price="$120/hr"
          location="Bangalore, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
        <Card
          image="https://pngimg.com/uploads/google/google_PNG19635.png"
          company="Google"
          days="3"
          position="Frontend Developer"
          tag1="Full-Time"
          tag2="Mid Level"
          price="$110/hr"
          location="Mumbai, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
        <Card
          image="https://pngimg.com/uploads/microsoft/microsoft_PNG18.png"
          company="Microsoft"
          days="7"
          position="Backend Developer"
          tag1="Full-Time"
          tag2="Senior Level"
          price="$115/hr"
          location="Hyderabad, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
        <Card
          image="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
          company="Netflix"
          days="2"
          position="Full Stack Developer"
          tag1="Full-Time"
          tag2="Senior Level"
          price="$130/hr"
          location="Pune, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
        <Card
          image="https://pngimg.com/uploads/meta/meta_PNG6.png"
          company="Meta"
          days="4"
          position="UI/UX Designer"
          tag1="Full-Time"
          tag2="Mid Level"
          price="$100/hr"
          location="Delhi, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
        <Card
          image="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19679.png"
          company="Apple"
          days="6"
          position="iOS Developer"
          tag1="Full-Time"
          tag2="Senior Level"
          price="$125/hr"
          location="Chennai, India"
          onApply={() => {
            console.log("Apply button clicked");
            // Handle apply logic here
          }}
        />
      </div>
    </div>
  );
}