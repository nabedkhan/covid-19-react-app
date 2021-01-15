import React from 'react';
import './Header.css'
import { FormControl, Select, MenuItem } from '@material-ui/core';

const Header = (props) => {
    const countries = props.countries;
    const country = props.country;
    const handleChange = props.handleChange;
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='text-dark'><span className='text-danger'>COVID-19</span> Update Information</h1>
                    </div>
                    <div className="col-md-4">
                        <FormControl className='form'>
                            <Select variant='outlined' value={country} onChange={handleChange}>
                                <MenuItem value='Worldwide'>Worldwide</MenuItem>
                                {
                                    countries.map(country => <MenuItem
                                        value={country.value}>{country.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;