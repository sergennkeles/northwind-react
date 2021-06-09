import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Acer</Dropdown.Item>
          <Dropdown.Item>Asus</Dropdown.Item>
          <Dropdown.Item>Dell</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            {" "}
            {/* yönlendirme işlemi için Navlink'i kullanıyoruz. NavLink react-routerdan geliyor. */}
            Sepete git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
