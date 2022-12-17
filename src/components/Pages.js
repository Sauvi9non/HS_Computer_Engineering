import React from "react";
import { Link } from "react-router-dom";
import { HeroImage, Header, Footer, SubMenu } from "./Menubar";

/**
 * 상세 페이지 템플릿
 */
const Template = ({ children }) => (
<>
    <Header/>
    <HeroImage/>
    {children}
    <Footer/>
</>
       );

/**
 * 홈페이지 메인 페이지
 */

export const MainPage = () => (
  <Template>
          <main>
    <div className="main-wrapper">
        <div className="posts-wrapper">
          <section>
            <div className="notice">

              <div><Link to="/community/board"><span className="title">{`공지사항 >`}</span></Link></div>

              <div className="notice-posts">
                <ul>
                  <li>
                    <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                  <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                  <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                  <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                  <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                  <Link to="/community/board/#"><span>게시글제목 예시입니다.</span></Link>
                    <span>2022-11-08</span>
                  </li>
                </ul>

              </div>

            </div>
          </section>

          <section>
            <div className="schedule">

              <div><Link><span className="title">{`학사일정 >`}</span></Link></div>

              <div>
                <div style={{backgroundColor: 'darkgray'}}>학사 달력 들어갈 자리</div>
              </div>

            </div>

          </section>
        </div>

        <div className="quick_menu-wrapper">
          <aside>
            <div className="quick_menu">
    
              <div><span className="title">{`Quick Menu >`}</span></div> 
    
              <div className="quick_menu items">
                <div><Link to="/undergraduate/curriculum"><img src="../img/process.png" alt="교과과정 아이콘" width='72px' height='72px'></img><span>교과과정</span></Link></div>
                <div><Link to="/community/employment"><img src="../img/job.png" alt="취업 및 연수 아이콘" width='72px' height='72px'></img><span>취업 및 연수</span></Link></div>
                <div><Link to="/member/faculty"><img src="../img/professor.png" alt="교수진 아이콘" width='72px' height='72px'></img><span>학부교수진</span></Link></div>
              </div>
    
            </div>
          </aside>
        </div>
      

    </div>

</main>
    </Template>
);

/**
 * 학부소개 페이지
 */
export const Introduction = () => (
 <>
 <div>
    <h3>
        학부소개
        <Greeting />
    </h3>
 </div>
 </>
);

/**
 * 학부장 인삿말
 */
export const Greeting = () => (
 <>
    <div>
        <h3>
            학부장인삿말
        </h3>
    </div>
 </>
    );

/**
 * 교육목표
 */
export const EducationGoal = () => (
 <>
 </>
    );

/**
 * 연혁
 */
export const History = () => (
 <>
 </>
    );

/**
 * 위치 및 연락처
 */
export const Contacts = () => (
 <>
 </>
    );


/**
 * 구성원 페이지
 */
export const Member = () => (
 <>
 </>
    );

/**
 * 교수진
 */
export const Faculty = () => (
    <>
    </>
       );

/**
 * 가족기업
 */
export const Enterprise = () => (
    <>
    </>
       );

/**
 * 위원회
 */
export const Committee = () => (
    <>
    </>
       );

/**
 * 학과사무실
 */
export const Office = () => (
    <>
    </>
       );


/**
 * 학사과정 페이지
 */
export const Undergraduate = () => (
    <>
    </>
       );

/**
 * 교육과정
 */
export const Education = () => (
    <>
    </>
       );

/**
 * 교과과정
 */
export const Curriculum = () => (
    <>
    </>
       );

/**
 * 졸업요건
 */
export const GraduationRequirement = () => (
    <>
    </>
       );

/**
 * 학생활동 페이지
 */
export const Activity = () => (
    <>
    </>
       );

/**
 * 동아리 / 소모임
 */
export const Club = () => (
    <>
    </>
       );

/**
 * 캡스톤 디자인
 */
export const Capstone = () => (
    <>
    </>
       );

/**
 * 공학경진대회
 */
export const Contest = () => (
    <>
    </>
       );

/**
 * 프로그래밍 캠프
 */
export const ProgrammingCamp = () => (
    <>
    </>
       );

/**
 * 커뮤니티 페이지
 */
export const Community = () => (
    <>
    </>
       );

/**
 * 전체공지
 */
export const Board = () => (
    <>
    </>
       );

/**
 * 학사공지
 */
export const Notice = () => (
    <>
    </>
       );

/**
 * 취업 및 연수
 */
export const Employment = () => (
    <>
    </>
       );

/**
 * 캘린더
 */


/**
 * 에러 페이지
 */
export const NotFound = () => (
    <>
    <h3>
        404 NOT FOUND
    </h3>
    <h4>
        존재하지 않는 페이지입니다.
    </h4>
    </>
       );