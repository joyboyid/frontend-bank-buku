import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditBook = () => {
  const [nama_buku, setName] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [thn_terbit, setThn] = useState("");
  const [jenis_buku, setJenis] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBookById = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/books/${id}`);
        setName(response.data.nama_buku);
        setPenulis(response.data.penulis);
        setPenerbit(response.data.penerbit);
        setThn(response.data.thn_terbit);
        setJenis(response.data.jenis_buku);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBookById();
  }, [id]);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8800/books/${id}`, {
        nama_buku: nama_buku,
        penulis: penulis,
        penerbit: penerbit,
        thn_terbit: thn_terbit,
        jenis_buku: jenis_buku,
      });
      navigate("/books");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Book</h1>
      <h2 className="subtitle">Edit Book</h2>
      <div className="card is-shadowless">
        <div className="content">
          <form onSubmit={updateBook}>
            <p className="has-text-center">{msg}</p>
            <div className="field">
              <label className="label"> Nama Buku </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama_buku}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Penulis"
                />
              </div>
            </div>
            <div className="field">
              <label className="label"> Penulis </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={penulis}
                  onChange={(e) => setPenulis(e.target.value)}
                  placeholder="Penulis"
                />
              </div>
            </div>
            <div className="field">
              <label className="label"> Penerbit </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={penerbit}
                  onChange={(e) => setPenerbit(e.target.value)}
                  placeholder="Penerbit"
                />
              </div>
            </div>
            <div className="field">
              <label className="label"> Tahun Terbit </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Tahun Terbit"
                  value={thn_terbit}
                  onChange={(e) => setThn(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label"> Jenis Buku </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={jenis_buku}
                  onChange={(e) => setJenis(e.target.value)}
                  placeholder="Jenis Buku"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditBook;
