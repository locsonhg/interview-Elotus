import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetSearchMovie } from "@/common/services/movies/hooks/useGetSearchMovie";
import { useDebounce } from "../hooks/useDebounce";
import SearchDropdown from "../components/SearchDropdown";
import "@/common/styles/header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data } = useGetSearchMovie({
    query: debouncedSearch,
    page: 1,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setSearch("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="layout-header">
      <div className="header-container">
        <h1 className="brand-title">🎬 Movies App</h1>

        <nav className="navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/now-playing"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Now Playing
          </NavLink>
          <NavLink
            to="/top-rated"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Top Rated
          </NavLink>
        </nav>

        <div className="search-container" ref={dropdownRef}>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>

          {search.trim() && debouncedSearch && data?.results?.length > 0 && (
            <SearchDropdown
              movies={data.results}
              query={search}
              onClose={() => setSearch("")}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
