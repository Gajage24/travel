import { useParams } from "react-router-dom";

const Packages = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const packageInfo = {

    solo: "Perfect for solo travelers who love exploring independently.",
    family: "Ideal for families with comfort, safety and fun.",
    friends: "Best for friends who want adventure and memories together.",
   
  };

  
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
     <h2>{type.toUpperCase()} TRIP</h2>

     
      <p style={{ fontSize: "18px", margin: "20px 0" }}>
        {packageInfo[type]}
      </p>

        <button
           onClick={ handleContact} 
        style={{
          padding: "12px 25px",
          background: "#2f6bed",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
  );
};

export default Packages;
