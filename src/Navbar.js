import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px; 
  background: linear-gradient(170deg, #1bc059, #0d47a1); 
  width: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover{color: #0f0}
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background: ${(props)=>props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props)=>props.show?"visible" : "hidden"}
`;

export default class Navbar1 extends React.Component {
    render() {
        const {cartCount} = this.props;
        return (
            <>
                <Nav>
                    <Title>Movie App Nav 1</Title>
                    <CartContainer>
                        <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png" />
                        <CartCount color="yellow" show="true">{cartCount}</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}

