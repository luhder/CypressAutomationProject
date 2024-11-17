import LoginPage from "../../support/demo/login.cy";
import LogoutPage from "../../support/demo/logout.cy";
import DashboardPage from "../../support/demo/dashboard.cy";
import LeavePage from "../../support/demo/LeavePage.cy";
import AdminPage from "../../support/demo/AdminPage.cy";
import MaintenancePage from "../../support/demo/Maintenance.cy";
import MyInfoPage from "../../support/demo/MyInfoPage.cy";
import PIMPage from "../../support/demo/PIMPage.cy";
import RecruitmentPage from "../../support/demo/RecruitmentPage.cy";
import TimePage from "../../support/demo/TimePage.cy";

describe('End-to-End Test for OrangeHRM', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  const logoutPage = new LogoutPage();
  const adminPage = new AdminPage();
  const pimPage = new PIMPage();
  const leavePage = new LeavePage();
  const timePage = new TimePage();
  const recruitmentPage = new RecruitmentPage();
  const myInfoPage = new MyInfoPage();
  const maintenancePage = new MaintenancePage();

beforeEach(() => {
  // Visit the login page before each test
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  loginPage.enterUsername('Admin');
  loginPage.enterPassword('admin123');
  loginPage.clickLoginButton();
  dashboardPage.verifyDashboardHeader('Dashboard');
});

it('Should successfully navigate to the Admin page', () => {
  adminPage.navigateToAdmin();
  adminPage.verifyAdminPage();
});


it('Should successfully navigate to the Leave page', () => {
  leavePage.navigateToLeave();
  leavePage.verifyLeavePage();
});

it('Should successfully navigate to the Time page', () => {
  timePage.navigateToTime();
  timePage.verifyTimePage();
});

it('Should successfully navigate to the Recruitment page', () => {
  recruitmentPage.navigateToRecruitment();
  recruitmentPage.verifyRecruitmentPage();
});

it('Should successfully navigate to the My Info page', () => {
  myInfoPage.navigateToMyInfo();
  myInfoPage.verifyMyInfoPage();
});

it('Should successfully navigate to the Maintenance page', () => {
  maintenancePage.navigateToMaintenance();
  maintenancePage.verifyMaintenancePage();
});
it('Should log out successfully', () => {
  logoutPage.Logoutoftheapp();
  
});
});