import React from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      customer: {
        name: 'Carlos',
        address: {
          street: 'Teststreet 1',
          zipCode: '41531',
          country: 'Colombia'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ isLoading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;