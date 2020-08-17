import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import logo from "./logo.png";

const Events = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button primary script={{ marginLeft: "12%" }}>
          Events-List
        </Button>
      }
    >
      <Modal.Header>Events</Modal.Header>
      <Modal.Content image scrolling>
        <Image
          size="medium"
          src={logo}
          wrapped
        />

        <Modal.Description>
          <p>
           Given Below is the list of all events
          </p>
          <ul>
              <li>GANS with Pytorch</li>
          </ul>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          REGISTER <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Events;
