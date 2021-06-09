import Reacti from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  // fonksiyonuna parametre olarak props verince parent componentten gelen veriyi alabiliyoruz. Burada diğer
  // bir kullanım yöntemi de parametre olarak süslü parentez içinde gelen props'u yazmaktır. Örn: {signIn} gibi
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.signIn} primary>
          Giriş Yap
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
