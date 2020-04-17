import React, { useState } from 'react';
import axios from "axios";
import { Form, Button, Input } from 'antd';

class ItemForm extends React.Component {
    state = {
        name: "",
        image: "",
        description: "",
        likes: ""
    };

    handleSubmit = () => {
        axios.post("/api/items", this.state).then((res) => {
            console.log(res);
            this.setState({
                name: "",
                image: "",
                description: "",
                likes: ""
            })
            this.props.history.goBack()
        });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const {
            name,
            image,
            description,
            likes
        } = this.state;
        return (
            <>
                <Form onFinish={this.handleSubmit}>
                    <Form.Item>
                        <p>Name</p>
                        <Input
                            label="Name"
                            placeholder="name"
                            autoFocus
                            required
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <p>Image</p>
                        <Input
                            label="Image"
                            required
                            name="image"
                            value={image}
                            placeholder="image"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <p>Description</p>
                        <Input
                            label="Description"
                            required
                            name="description"
                            value={description}
                            placeholder="description"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <p>Likes</p>
                        <Input
                            label="likes"
                            required
                            name="likes"
                            value={likes}
                            placeholder="likes"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    }
}

export default ItemForm
