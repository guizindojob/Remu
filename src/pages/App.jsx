import "./styles/index.scss";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Context from "@/context/Context";
import HomePage1 from "./pages";
import CourseListPage4 from "./pages/coursesList/courses-list-4";
import CourseSinglePage6 from "./pages/courseSingle/courses-single-6/page";
import CourseCartPage from "./pages/cartPages/course-cart";
import CourseCheckoutPage from "./pages/cartPages/course-checkout";
import LessonSinglePage2 from "./pages/aboutCourses/lesson-single-2";
import BlogListpage3 from "./pages/blogs/blog-list-3";
import BlogdetailsPage from "./pages/blogs/blogs";
import AboutPage1 from "./pages/about/about-1";
import ContactPage1 from "./pages/contacts/contact-1";
import DashboardPage from "./pages/dashboard/dashboard";
import EventListPage2 from "./pages/events/event-list-2";
import EventCartPage from "./pages/cartPages/event-cart";
import EventCheckoutPage from "./pages/cartPages/event-checkout";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import NotFoundPage from "./pages/not-found";
import LoginForm from "@/components/others/LoginForm";
import LoginPage from "./others/login";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage1 />} />
              <Route path="home-1" element={<HomePage1 />} />
              <Route path="courses-list-4" element={<CourseListPage4 />} />
              <Route path="courses-list-6" element={<CourseSinglePage6 />} /> {/* Certifique-se de que o caminho e o componente estão corretos */}
              <Route path="course-cart" element={<CourseCartPage />} />
              <Route path="course-checkout" element={<CourseCheckoutPage />} />
              <Route path="lesson-single-2" element={<LessonSinglePage2 />} />
              <Route path="blog-list-3" element={<BlogListpage3 />} />
              <Route path="blogs/:id" element={<BlogdetailsPage />} />
              <Route path="about-1" element={<AboutPage1 />} />
              <Route path="contact-1" element={<ContactPage1 />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="event-list-2" element={<EventListPage2 />} />
              <Route path="event-cart" element={<EventCartPage />} />
              <Route path="event-checkout" element={<EventCheckoutPage />} />
              <Route path="not-found" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;