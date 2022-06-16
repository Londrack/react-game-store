import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.scss';
import NewPassword from '../pages/NewPassword';
import PasswordRecovery from '../pages/PasswordRecovery';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import {GeneralLayout as Layout} from '../containers/GeneralLayout';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import {useWindowSize} from '../hooks/useWindowSize';
import MyAccount from '../pages/MyAccount';

import { useDispatch, useSelector } from "react-redux";
import { setShowHeader, setShowHeaderTitle } from '../actions';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';

export default function App() {
    const dispatch = useDispatch();
    const showHeader = useSelector(state => state.showHeader);

    const windowSize = useWindowSize();

    useEffect(() => {
        const valSetShowHeader = windowSize.width <= 578 ? false : true;
        dispatch(setShowHeader(valSetShowHeader));

        const valSetShowHeaderTitle = windowSize.width <= 768 ? false : true;
        dispatch(setShowHeaderTitle(valSetShowHeaderTitle));
    }, [windowSize]);

  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={
                  <Layout><Home /></Layout>
              } />
              <Route exact path="/new-password" element={
                  <Layout showHeader={showHeader}><NewPassword /></Layout>
              } />
              <Route exact path="/password-recovery" element={
                  <Layout showHeader={showHeader}><PasswordRecovery /></Layout>
              } />
              <Route exact path="/create-account" element={
                  <Layout showHeader={showHeader}><CreateAccount /></Layout>
              } />
              <Route exact path="/login" element={
                  <Layout showHeader={showHeader}><Login /></Layout>
              } />
              <Route exact path="/my-account" element={
                  <Layout title='My Account'><MyAccount /></Layout>
              } />
              <Route exact path="/my-order" element={
                  <Layout title='My order'><MyOrder /></Layout>
              } />
              <Route exact path="/my-orders" element={
                  <Layout title='My orders'><MyOrders /></Layout>
              } />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}
