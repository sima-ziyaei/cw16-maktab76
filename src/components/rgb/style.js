import styles from "styled-components";

export const Section = styles.section`
    display: flex;
    flex-direction:column;
    margin-left:30px;
`

export const Btn = styles.button`
    border: 1px solid black;
    width: 200px;
    margin-bottom:10px;
    border-radius:10px;
    height:50px;
    font-weight:bold;
    font-size:20px
`
export const Par = styles.p`
    border-top: 1px solid ${({color})=>color};
    border-bottom: 1px solid ${({color})=>color};
    width: 50px;
    margin-top: 10px;
    color:${({color})=>color};
    font-weight:bold;
`
export const Container = styles.div`
    display:flex;
    justify-content:space-between;
    width:500px;
`

export const BtnRgb = styles.button`
border: 1px solid black;
width: 200px;
height:200px;
margin-top:160px;
background-color: ${({bgColor})=>bgColor};
color:${({color})=>color};
font-weight:bold;
border-radius:20px

`