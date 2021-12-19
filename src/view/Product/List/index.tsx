import qs from "qs";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
    IProductSearch,
    ProductServerError
} from "../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ProductsList: React.FC = () => {
    const [invalid, setInvalid] = useState<string>("");
    const [searchParams, setSearchParams] = useSearchParams();

    const { GetProducts, DeleteProduct } = useActions();
    const { products, last_page } = useTypedSelector((store) => store.product);

    let [search, setSearch] = useState<IProductSearch>({
        page: searchParams.get("page"),
        id: searchParams.get("id"),
        name: searchParams.get("name"),
        detail: searchParams.get("detail"),
    });

    const buttons = [];
    for (var i = 1; i <= last_page; i++) {
        buttons.push(i);
    }

    useEffect(() => {
        async function getProducts() {
            await GetProducts(search);
        }
        getProducts();
    }, [search]);

    const onDeleteProduct = async (id: number) => {
        try {
            await DeleteProduct(id);
            GetProducts(search)
        } catch (ex) {
            const serverErrors = ex as ProductServerError;

            if (serverErrors.error) {
                setInvalid(serverErrors.error);
            }
        }
    }

    return (
        <>
            <h1>Product</h1>
            <div className="row">
                <div className="col-9">
                    <div className="card mt-3">
                        <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "5%" }}>Id</th>
                                        <th scope="col" style={{ width: "30%" }}>Name</th>
                                        <th scope="col" style={{ width: "50%" }}>Details</th>
                                        <th scope="col" style={{ width: "15%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <th className="align-middle" scope="row">{item.id}</th>
                                                <td className="align-middle">{item.name}</td>
                                                <td className="align-middle">{item.detail}</td>
                                                <td className="align-middle">
                                                    <ul className="nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link p-1" to={"/products/edit-product?id=" + item.id}>
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link p-1" to="#" onClick={() => onDeleteProduct(item.id)}>
                                                                <FontAwesomeIcon icon={faTrashAlt} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="text-end">
                                {buttons.map((item, key) => {
                                    const data: IProductSearch = { ...search, page: item, };
                                    return (
                                        <Link
                                            onClick={() => { setSearch(data); }}
                                            key={key}
                                            to={"?" + qs.stringify(data)}
                                            className="btn btn-primary mx-1">
                                            {item}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mt-3">
                        <div className="card-body">
                            <Link className="btn btn-primary w-100" to="/products/add-product">Add Product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsList;