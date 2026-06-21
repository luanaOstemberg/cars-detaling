import Cards from "./components/cards";

export default function Services() {

    const action = () => {
        console.log('click');
    }
    return (
        <>
            <h1>Servicios</h1>
            <Cards img={"https://imgs.search.brave.com/wFXBxwdH2ANVlCoHd7kPoIdbqzV-rnAcFP8bey1_XCA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZmVycmFyaS9z/bWFsbC9mZXJyYXJp/X1BORzEwNjgwLnBu/Zw"} title={"Lavado básico"} subtitle={"limpieza exterior y aspirado general para mantener el auto en buen estado"} btnText={"Contactar"} btnAction={action} />

            <Cards img={"https://imgs.search.brave.com/wFXBxwdH2ANVlCoHd7kPoIdbqzV-rnAcFP8bey1_XCA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZmVycmFyaS9z/bWFsbC9mZXJyYXJp/X1BORzEwNjgwLnBu/Zw"} title={"Lavado básico"} subtitle={"limpieza exterior y aspirado general para mantener el auto en buen estado"} btnText={"Contactar"} btnAction={action} />
            <Cards img={"https://imgs.search.brave.com/wFXBxwdH2ANVlCoHd7kPoIdbqzV-rnAcFP8bey1_XCA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZmVycmFyaS9z/bWFsbC9mZXJyYXJp/X1BORzEwNjgwLnBu/Zw"} title={"Lavado básico"} subtitle={"limpieza exterior y aspirado general para mantener el auto en buen estado"} btnText={"Contactar"} btnAction={action} />
            <Cards img={"https://imgs.search.brave.com/wFXBxwdH2ANVlCoHd7kPoIdbqzV-rnAcFP8bey1_XCA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZmVycmFyaS9z/bWFsbC9mZXJyYXJp/X1BORzEwNjgwLnBu/Zw"} title={"Lavado básico"} subtitle={"limpieza exterior y aspirado general para mantener el auto en buen estado"} btnText={"Contactar"} btnAction={action} />
        </>
    )
}