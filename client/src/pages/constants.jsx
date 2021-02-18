import styled from 'styled-components';

// Colors
export const blueColor = '#0071BC'
export const redColor = 'red'
export const linkColor = '#007bff'

// Buttons 
export const BlueButtonStyle = {
    padding: '0 20px',
    color: 'white',
    background: blueColor,
    border: `10px solid ${blueColor}`
}
export const RedButtonStyle = {
    padding: '0 20px',
    color: 'white',
    background: redColor,
    border: `10px solid ${redColor}`
}

// Containers
export const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
`;
export const List = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    background-color: white; 
`;
export const WhiteContainer = styled.div`
    background-color: white;
    padding: 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
`;
export const AdressContainer = styled.div`
    padding: 20px;
    text-align: center;
`;
export const Container60 = styled.div`
    width: 60%;
    margin: 0 auto;
`;
// Elements
export const Title = styled.h3`
    padding-bottom:30px; 
    color: ${blueColor};
`;
export const Label = styled.label`
    margin: 5px;
`;
export const Span = styled.span.attrs({
    className: `red-text`,
})`
    font-size: 12px;
    color: ${redColor};
`;
export const Information = styled.div`
    padding-bottom: 30px;
    color: gray;
    font-style: italic;
`;
export const Link = styled.label`
    color: ${linkColor};
`;
export const NavLink = styled.a`
    margin: 0 ;
    margin-left: 30px;
`;
export const Navigation = {
    background: '#f8f9fa'
};

// Messages
export const MessagesWrapper = styled.div`
    width: 40vw;
    margin: 0 auto;
`;
export const MessageContainer = styled.div`
    overflow: auto;
    height: 500px;
    scroll-behavior: smooth;
    margin-bottom: 10px;
`;
export const MyMessages = styled.p.attrs({
    className: "float-right"
})`
    color: white;
    background-color: rgb(0, 113, 188);
    border-radius: 9px;
    padding: 9px;
    text-align: right;
    width: 100%;
`;
export const NotMyMessages = styled.p`
    color: white;
    background-color: gray;
    border-radius: 9px;
    padding: 9px;
    float-left;
`;
export const MessageDate = styled.i`
    font-size: 10px;
`;
export const MessageList = styled.div`
    overflow: auto;
    height: 300px;
`;
export const Person = styled.div`
    color: white;
    background-color: rgb(0, 113, 188);
    padding: 12px;
    // width: fit-content;
    border-radius: 9px;
    margin: 10px;
    cursor: pointer;
`;

// Notice Board
export const AnnouncementField = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 0.7fr 1.8fr 0.5fr;
    grid-template-rows:  50px 2.1fr 0.4fr;
    gap: 15px 30px;
    grid-template-areas:
    "Image TitleSection User"
    "Image ContentSection ."
    "Image DateSection  Footer";
`;
export const Content = styled.div`
  grid-area: ContentSection;
`;
export const TitleSection = styled.div`
  grid-area: TitleSection;
  font-weight: bold;
`;
export const DateSection = styled.div`
  grid-area: DateSection;
`;
export const FooterButton = styled.div`
  grid-area: Footer;
  text-align: right;
`;
export const UserSection = styled.div`
  grid-area: User;
  text-align: right;
`;
export const Image = styled.img`
  grid-area: Image;
  height: 240px;
  width: 300px;
  object-fit: cover;
`;