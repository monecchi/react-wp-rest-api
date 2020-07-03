import React, { Component, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

// Atomize
import {
	Div,
	Container,
	Row,
	Col,
	Tag,
	Anchor,
	Button,
	Text,
	Icon
} from "react-atomize";

// Custom cacheable fetch api service
// import useFetch from "./src/useFetch";

// Bootstrap stuff
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
//import Badge from "react-bootstrap/Badge";

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

export class RestaurantStores extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: [],
			isLoaded: false,
			showModal: false
		};
	}

	componentDidMount() {
		axios
			.get("https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/")
			.then(res =>
				this.setState({
					stores: res.data,
					isLoaded: true
				})
			)
			.catch(err => console.log(err));
	}

	render() {
		const { stores, isLoaded, showModal } = this.state;

		let tagColor = "";
		let tagBg = "";
		let { store, city, isOpen } = "undefined";

		let styles = {
			card__places: {
				boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)"
			}
		};

		let isHidden = !this.state.isLoaded ? "block" : "none";

		return (
			<>
				{stores &&
					stores.map(
						store => (
							((city = store.slug),
								(isOpen = store[city].is_open == 1 ? "Aberto" : "Fechado"),
								(tagBg =
									store[city].is_open == 1 ? "softSuccess" : "softDanger")),
							(
								<Col size={{ xs: 12, md: 4, lg: 3, xl: 3 }} className="store-card" key={store.id}>
									{console.log(store)}
									<Div
										key={store.id}
										bg="white"
										d="flex"
										flexDir="column"
										w="26.5rem"
										m={{ b: "1rem" }}
										p="1.5rem"
										rounded="sm"
										shadow="2"
										hoverShadow="3"
									>
										<Text
											tag="h5"
											textSize="h5"
											m={{ b: "1rem" }}
											className="text-capitalize"
										>
											{store.slug || <Skeleton />}
										</Text>

										<Text tag="p" textSize="body" m={{ b: "1rem" }}>
											{store[city].formatted_address || <Skeleton count={3} />}
										</Text>

										<Div d="flex" flexWrap="wrap">
											<Tag
												bg={tagBg}
												textColor={`${
													tagBg == "softSuccess" ? "successDark" : "brand"
													}`}
												className={`${
													store[city].is_open == 1
														? "badge-status-opened"
														: "badge-status-closed"
													}`}
												rounded="circle"
												p={{ x: "0.75rem", y: "0.25rem" }}
												m={{ r: "0.5rem", b: "0.5rem" }}
												tag="span"
												textSize="caption"
												shadow="0"
											>
												{isOpen}
											</Tag>{" "}
										</Div>

										<div className="d-flex flex-column mb-2">Ligar na loja</div>

										<Anchor
											href={"tel:" + store[city].phone_raw}
											hoverTextColor="white"
											className={
												store[city].is_open == 0
													? "text-decoration-none disabled"
													: "text-decoration-none"
											}
											disabled={store[city].is_open == 0 ? "disabled" : null}
										>
											<Button
												textColor="brand"
												hoverTextColor="white"
												textWeight="700"
												bg="softDanger"
												hoverBg="brand"
												cursor="pointer"
												rounded="sm"
												suffix={
													<Icon
														name="LongRight"
														size="20px"
														color="brand"
														m={{ l: "1rem" }}
														className={
															store[city].is_open == 0
																? "fill-white text-decoration-none disabled"
																: "text-decoration-none"
														}
														hoverColor="white"
													/>
												}
												disabled={store[city].is_open == 0 ? "disabled" : null}
											>
												{store[city].formatted_phone}
											</Button>
										</Anchor>
									</Div>
								</Col>
							)
						)
					)}
			</>
		);
	}
}

export default RestaurantStores;
