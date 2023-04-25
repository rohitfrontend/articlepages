import { useState } from "react";

import { data } from "./users.js";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CalendarIcon, EditIcon, DeleteIcon, HandIcon, AdvanceIcon } from '../../../Icons/icons.component'
import ArticleFilters from "../../../components/ArticleFilters.js";
import EditPopup from "../../../components/ArticlesAnalysis/BasicPopup.js";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput.js";
import TagPopup from "../../../components/ArticlesAnalysis/TagPopup.js";
import BasicPopup from "../../../components/ArticlesAnalysis/BasicPopup.js";


function Articlelist(){
    const [users, setUsers] = useState(data);
	const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
	const [searchPhrase, setSearchPhrase] = useState("");

	const sortById = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			if (sorted.reversed) {
				return userA.id - userB.id;
			}
			return userB.id - userA.id;
		});
		setUsers(usersCopy);
		setSorted({ sorted: "id", reversed: !sorted.reversed });
	};

	const sortByName = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			const fullNameA = `${userA.company_name} ${userA.last_name}`;
			const fullNameB = `${userB.company_name} ${userB.last_name}`;
			if (sorted.reversed) {
				return fullNameB.localeCompare(fullNameA);
			}
			return fullNameA.localeCompare(fullNameB);
		});
		setUsers(usersCopy);
		setSorted({ sorted: "name", reversed: !sorted.reversed });
	};

	const sortByEmail = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			const fullNameA = `${userA.company_name} ${userA.last_name}`;
			const fullNameB = `${userB.company_name} ${userB.last_name}`;
			if (sorted.reversed) {
				return fullNameB.localeCompare(fullNameA);
			}
			return fullNameA.localeCompare(fullNameB);
		});
		setUsers(usersCopy);
		setSorted({ sorted: "email", reversed: !sorted.reversed });
	};

	const search = (event) => {
		const matchedUsers = data.filter((user) => {
			return `${user.company_name} ${user.last_name}`
				.toLowerCase()
				.includes(event.target.value.toLowerCase());
		});

		setUsers(matchedUsers);
		setSearchPhrase(event.target.value);
	};

	const renderUsers = () => {
		return users.map((user) => {
			return (
				<tr>
					<td>{user.id}</td>
					<td>{`${user.company_name} ${user.last_name}`}</td>
					<td>{user.email}</td>
					<td>{user.gender}</td>
					<td>{`${user.company_name} ${user.last_name}`}</td>
				</tr>
			);
		});
	};

	const renderArrow = () => {
		if (sorted.reversed) {
			return <FaArrowUp />;
		}
		return <FaArrowDown />;
	};

	return (
		<>



<div className='content-box'>
{/* <ArticleFilters/> */}
			{/* <div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div> */}
			<div className="table-container">
				<table className="table table-bordered article-list-table">
					<thead>
						<tr>
							
						<th>
						{/* <FormCheckInput className="mr-5"/> */}
						<span style={{ marginRight: 10 }}>Check All</span>
							</th>
							
							<th onClick={sortById}>
								<span style={{ marginRight: 10 }}>Article ID</span>
								{sorted.sorted === "id" ? renderArrow() : null}
							</th>
							<th onClick={sortByName}>
								<span style={{ marginRight: 10 }}>Headline</span>
								{sorted.sorted === "name"
									? renderArrow()
									: null}
							</th>
							<th onClick={sortByEmail}>
								<span style={{ marginRight: 10 }}>Entity</span>
								{sorted.sorted === "email"
									? renderArrow()
									: null}
							</th>
							<th>
								<span>Edition</span>
							</th>
							<th>
								<span>Media Type</span>
							</th>
							<th>
								<span>Publication</span>
							</th>
							<th>
								<span>Published Date</span>
							</th>
							<th>
								<span>Tonality</span>
							</th>
							<th>
								<span>Language</span>
							</th>
							<th>
								<span>Action</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="search-filter">
							<td><FormCheckInput className="mr-5"/></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td><div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchPhrase}
					onChange={search}
				/>
			</div></td>
			<td></td>
			{/* <td><EditPopup/><a href="#"><DeleteIcon/></a></td> */}
						</tr>
						<tr>
						<td><FormCheckInput className="mr-5"/></td>
                <td>0123</td>
                <td>Company</td>
                <td>Tata Motors</td>
                <td>Tata Motors</td>
                <td>Mumbai</td>
                <td>Regional</td>
                <td>7 Feb 2023</td>
                <td>Positive</td>
                <td>Marathi</td>
                <td className="action-btns"><BasicPopup/><button className="btn btn-primary"><AdvanceIcon/></button></td>
                </tr>
						
						</tbody>
				</table>
			</div>
      </div>
		</>
	);


}
export default Articlelist;