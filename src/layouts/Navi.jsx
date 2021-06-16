import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // parametre olarak false vermemizin nedeni. başlangıçta authenticated olmadığı için
  const history = useHistory();
  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/"); // çıkış işlemi yaptıkran sonra anasayfaya yönlendirme işlemi
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item as={NavLink} to={"/"} name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} /> // props olarak parent componentten child componente veri gönderebiliriz. Burada handleSignIn
              // fonksiyonu SignedOut.jsx deki Giriş Yap butonuna props olarak yollayıp  giriş işleminin olmasını sağladık.
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
