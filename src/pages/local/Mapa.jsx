export default function Mapa({local}) {
    return(<>
        <iframe 
            src={local}
            style={{
                border: 0,
                width: "70vw",
                maxWidth : "500px",
                height: "300px",
                borderRadius : "20px"
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Google"
        />
    </>)
}