import React, { useState } from "react";
import { Button, Card, Image, Icon, List } from "semantic-ui-react";
import { connect } from "react-redux";
import faker from "faker";
import { Link } from "react-router-dom";

// const SearchCardsAdd = props => {
//   constructor(props);
//   {
//     super(props);
//     this.SearchCardsAdd = this.SearchCardsAdd.bind(this);

//     const [customerId, addId] = useState(0);

//     console.log("cardsaddprops", props);

//     let displayTeeTimes = props.customer.tee_times
//       .filter(teeTime => teeTime.time)
//       .map(teeTime => (
//         <List.Item textAlign="center" key={teeTime.id}>
//           You have a tee time at {teeTime.time}{" "}
//         </List.Item>
//       ));
//     return (
//       <Card textAlign="center" fluid>
//         <Image
//           style={{ borderRadius: "50%" }}
//           src={faker.image.avatar()}
//           alt=""
//           wrapped
//           ui={false}
//         />
//         <Card.Content>
//           <Card.Header>{props.customer.name}</Card.Header>
//           <Card.Description>
//             {/* {JSON.stringify(props.customer.tee_times)} */}
//             <List>{displayTeeTimes}</List>
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Button
//             onClick={() => this.setState({ customerId: props.customer.id })}
//           >
//             Add To Group
//           </Button>
//         </Card.Content>
//       </Card>
//     );
//   }
// };
// const mapStateToProps = state => {
//   return {
//     customers: state.customer.all.filter(customer => customer.id),
//     teeTimes: state.teeTimes.all.filter(teeTime => teeTime.id)
//   };
// };
// export default connect(mapStateToProps)(SearchCardsAdd);

class SearchCardsAdd extends React.Component {
  state = {
    filterPhrase: "",
    filterBy: "name",
    customerId: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state.customerId,
      customerId: this.props.customer.id
    });
  };
  handleClear = e => {
    this.setState({
      customerId: ""
    });
  };
  render() {
    console.log("cardsaddprops", this.state);

    let displayTeeTimes = this.props.customer.tee_times
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
          <Card.Header>{this.props.customer.name}</Card.Header>
          <Card.Description>
            {/* {JSON.stringify(props.customer.tee_times)} */}
            <List>{displayTeeTimes}</List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={this.handleClick}>Add To Group</Button>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customer.all.filter(customer => customer.id),
    teeTimes: state.teeTimes.all.filter(teeTime => teeTime.id)
  };
};
export default connect(mapStateToProps)(SearchCardsAdd);
