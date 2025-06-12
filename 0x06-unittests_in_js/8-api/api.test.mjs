import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from './api.js'; // ensure your app also uses ESM if necessary

chai.use(chaiHttp);
