import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto />
        </HeaderEstilizado>
    )

}


export default Cabecalho




// Mas, especificamente para esse cenário da logo, queremos que seja sempre a mesma URL e não passe por nenhum processamento do Vite, que irá adicionar um hash no final. Queremos que fique sempre disponível estaticamente, sem ter essa alteração.

// Então, ao invés de fazer um import da logo, colocamos na pasta "public" para ficar com uma URL limpa e amigável para SEO.