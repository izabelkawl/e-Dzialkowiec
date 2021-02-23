import styled from 'styled-components';

// Colors
export const blueColor = '#0071BC';
export const redColor = 'red';
export const linkColor = '#007bff';
export const lightGray = '#f8f9fa';
export const hoverBlue = '#0062a3';

// Buttons 
export const BlueButtonStyle = {
    padding: '0 20px',
    color: 'white',
    background: blueColor,
    border: `10px solid ${blueColor}`
};

export const RedButtonStyle = {
    padding: '0 20px',
    color: 'white',
    background: redColor,
    border: `10px solid ${redColor}`
};

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
    padding: 30px;
    margin: 0 auto;
    background-color: white; 
    @media(min-width: 768px){
        width: 88%;
        padding: 50px;
        margin-top: 50px;
    }
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
    @media(min-width: 992px){
        width: 60%;
    }
`;

// Elements
export const Title = styled.h3`
    padding-bottom:30px; 
    color: ${blueColor};
`;

export const Label = styled.label`
    margin: 5px;
`;

export const Span = styled.span`
    font-size: 12px;
    color: ${redColor};
`;

export const Information = styled.div`
    padding-bottom: 30px;
    color: gray;
    font-style: italic;
`;

export const Link = styled.a`
    color: ${linkColor};
`;

export const NavLink = styled.a`
    margin: 0 ;
    margin-left: 30px;
`;

export const Navigation = {
    background: '#f8f9fa'
};