import React from "react";
import { Button, Card, Image, Icon, List } from "semantic-ui-react";
import { connect } from "react-redux";
import faker from "faker";

const CardExampleGroups = props => {
  console.log("cardsprops", props);
  let displayTeeTimes = props.customer.tee_times
    .filter(teeTime => teeTime.time)
    .map(teeTime => (
      <List.Item textAlign="center" key={teeTime.id}>
        You have a tee time at {teeTime.time}{" "}
      </List.Item>
    ));
  return (
    <Card textAlign="center" fluid>
      <Image
        style={{ borderRadius: "50%" }}
        src={faker.image.avatar()}
        alt=""
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.customer.name}</Card.Header>
        <Card.Description>
          {/* {JSON.stringify(props.customer.tee_times)} */}
          <List>{displayTeeTimes}</List>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};
const mapStateToProps = (state, props) => {
  return {
    // teeTimes: props.customer.tee_times.find(teeTime =>
    //   teeTime.time === undefined ? "No tee times!" : teeTime.time
    // )
    newTeeTime: props.customer.tee_times.find(newTeeTime =>
      newTeeTime.time !== undefined ? newTeeTime : "No Tee Times"
    )
    //     teeTimes(props) {
    //       if (
    //         props.customer.tee_times.find(teeTime => teeTime.time === undefined)
    //       ) {
    //         return "No Tee Times!";
    //       } else {
    //         return props.customer.tee_times.find(teeTime => teeTime.id);
    //       }
    //     }
    //   };
  };
};
export default connect(mapStateToProps)(CardExampleGroups);
