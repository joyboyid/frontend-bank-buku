import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddBook = () => {
  const [nama_buku, setName] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [thn_terbit, setThn] = useState("");
  const [jenis_buku, setJenis] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", {
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
      <h2 className="subtitle">Add Book</h2>
      <div className="card is-shadowless">
        <div className="content">
          <form onSubmit={saveBook}>
            <p className="has-text-center">{msg}</p>
            <div className="field">
              <label className="label"> Nama Buku </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama_buku}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Buku"
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
                  value={thn_terbit}
                  onChange={(e) => setThn(e.target.value)}
                  placeholder="Tahun Terbit"
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
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddBook;
