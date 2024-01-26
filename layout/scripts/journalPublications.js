const journals = [
    {
        id: 1,
        title: `Obot C., Batta H., Nda I. & Ekeanyanwu, N. (2022)`,
        body: `Coverage of Science,
        Technology, and Innovation by Major Broadcast Networks in Nigeria: An
        Exploratory Survey. ESI Preprints. <a href=:" https://doi.org/10.19044/esipreprint.7.2022.p314/">Visit</a>
      `,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 2,
        title: `Batta, H., Ali, H. M., Ekeanyanwu, N. T., Obot, C. & Batta, N. N. (2021)`,
        body: ` Interest
        and awareness of science communication in select academic programmes of
        six Nigerian universities. SAU Journal of Management and Social Sciences,
        6(3): 1 – 21`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 3,
        title: `Chinedu I.O. Okeke, Christian S. Ugwuanyi, Charity C. Okeke, Gloria C. Ugwu,
        Anthonia N. Ngwoke, Clara O. Ifelunni, Eucharia N. Aye, & Ekeanyanwu, N.
        T. (2021).`,
        body: ` Teaching Engagement and Preschool Practitioners’ Disciplining
        Practice in PostCorporal Punishment Era: A Correlational Quantitative
        Evaluation. International Journal of Psychosocial Rehabilitation, 25 (2), 1345-
        1354.`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 4,
        title: `Amadi, Fred & Ekeanyanwu, N. T. (2019).`,
        body: ` The Rationale for Qualitative Research
        Methods in the Era of Fake News. The Nigerian Journal of Communication.
        16(2), 267-294.`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 5,
        title: `Koko, Reginald; Ekeanyanwu, N. T & Ibituru, Pepple (2019).`,
        body: ` Public Relations and
        Image Management Strategies of Nigeria Security & Civil Defence Corps After
        the Infamous “Oga at the Top” Incident. Journalism and Mass Communication.
        9(2), 84-99. doi: 10.17265/2160-6579/2019.02.004.`,
        download: `<a class="btn inverse" href="../../Document/PUBLICATIONS/Public Relations and Image Management Strategies of Nigeria Security & Civil Defence Corps After the Infamous “Oga at the Top” Incident.pdf"download="../../Document/PUBLICATIONS/Public Relations and Image Management Strategies of Nigeria Security & Civil Defence Corps After the Infamous “Oga at the Top” Incident.pdf" title="Download ">Download</a>`
    },
    {
        id: 6,
        title: `Amadi, F. A.; Ekeanyanwu, N. T.; and Onwubere, C. H. (2018)`,
        body: ` Problematising the
        credibility of logo-centric data in the era of post-humanism research. UNESWA
        Journal of Education, 1(1), 102-112. <a href=:" http://www.uniswa.sz/academicseducationujoe">Visit</a> `,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 7,
        title: `Ekeanyanwu, N. T.; Batta, Herbert; and Oyokunyi, Jon Ita (2017)`,
        body: ` The Economics of
        Decline in the Media Industry: Survival Strategies of American Print Media
        Firms and Implications for a Diminishing Print Media Industry in Nigeria.
        Journalism and Mass Communication. 7(8), 427-445. doi: 10.17265/2160-
        6579/2017.08.001`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 8,
        title: `Batta, Herbert; Ekeanyanwu, N. T. and Batta, Nevelyn W. (2017)`,
        body: ` Decline and
        Survival Strategies of the Newspaper Industry in a Depressed Economy: A
        Study of the Daily Trust and the Leadership Newspapers. The Nigerian Journal
        of Communication. 14(1), 281-320`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 9,
        title: `Oyokunyi, Jon Ita; Ekeanyanwu, N. T. and Aniebo, Sampson (2017)`,
        body: ` Economics of
        Decline and Survival Strategies of Nigerian Print Media Industry: A Study of
        The Guardian; The Sun and Leadership Newspapers. University of Uyo Journal
        of Humanities. 21(2), 305-327`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 10,
        title: `Ekeanyanwu, N. T. and Ajakaiye, O. (2016)`,
        body: ` Nigerian Media, Boko-Terrorism, and
        Politics of the 2015 Nigerian General Elections. The Nigerian Journal of
        Communication, 13(1), 103-136`,
        download: `<a class="btn inverse" href="../../Document/PUBLICATIONS/Nigerian Media, Boko-Terrorism, and Politics of the 2015 Nigerian General Elections.pdf" download="../../Document/PUBLICATIONS/Nigerian Media, Boko-Terrorism, and Politics of the 2015 Nigerian General Elections.pdf" title="Download ">Download</a>`
    },
    {
        id: 11,
        title: `Ekeanyanwu, N. T. and Peter, A. S. (2015)`,
        body: `Children, Youths and Mediated Violence:
        A Reflective Evaluation of Some Selected Theoretical Models. The Nigerian
        Journal of Communication. 12(1), 50-71`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 12,
        title: `Obayan, T. O. and Ekeanyanwu, N. T. (2014)`,
        body: ` Audience Perception of Nollywood’s
        Recurrent Movie Themes as Agents of Socio-Cultural Development. Mass
        Media Review: An International Journal of Mass Communication. 1(4), 55-76`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 13,
        title: `Okorie, N. and Ekeanyanwu, N. T. (2014)`,
        body: ` ICT, Cyber-bullying, and Self-disclosure:
        an Experiential Study of Twitter. Covenant Journal of Communication, 2(1), 61-
        76`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 14,
        title: `Ekeanyanwu, N. T. and Kalyango, Y. (2013)`,
        body: ` Rethinking International News Flow in
        the Era of Social Media. The Nigerian Journal of Communication. 11(1), 139-
        164.`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 15,
        title: `Peter, A. S., Sobowale, I. A. & Ekeanyanwu, N. T. (2013)`,
        body: ` Theory of Planned
        Behaviour: Measuring Adolescents Media Literacy and Alcohol Drinking
        Expectancies. Covenant Journal of Communication, 1(2), 118-129`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 16,
        title: `Peter, A. S. & Ekeanyanwu, N. T. (2013)`,
        body: ` Book Review: The Elements of Journalism.
        Covenant Journal of Communication, 1(2), 196-201`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 17,
        title: `Ekeanyanwu, N. T., Kalyango, Y. & Peters, A. S. (2012)`,
        body: ` Global News Flow Debate
        in the Era of Social Media Networks: Is the U.S. Media Still the World’s News
        Leader? European Scientific Journal. 8(3), 135-160`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 18,
        title: `Ekeanyanwu, N. T., Igwe, C. & Igbinoba, A. O. (2012)`,
        body: ` Drama and Communication
        in Television Advertising: A Study of MTN’s “Sunrise” and Indomie Noodle’s
        “Make the World a Better Place” European Scientific Journal. 8(5), 85-105`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 19,
        title: `Ekeanyanwu, N. T. & Obianigwe, N. O. (2012)`,
        body: ` The Nigerian Press, Brown Envelope
        Syndrome  (BES) and Media Professionalism: The Missing Link. Journalism
        and Mass Communication. 2(4), 514-529`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 20,
        title: `Nwadike, F. & Ekeanyanwu, N. T. (2012)`,
        body: ` Building Sustainable Peace in Africa:
        Nigeria in Perspective. African Media and Democracy Journal. 1(2), 80-96`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 21,
        title: `Tayo, A. S., Igbinoba, A. O., & Ekeanyanwu, N. T. (2012)`,
        body: ` A Comparative Analysis
        of Movie Preference among Undergraduates of Christian and Secular
        Universities. Indian Journal of Media Studies, 6(1), 1-25`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 22,
        title: `Ekeanyanwu, N. T. and Nwadike, F. (2011)`,
        body: ` Examination of Value Conflict Limiting
        Conception of Multicultural Education in Minority Institutions in the US:
        Retention and Graduation Outcry. Fort Hare Papers, 17(1), 33-47`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 23,
        title: `Ekeanyanwu, N. T. & Nkem Ndem Vivienne (2011)`,
        body: ` Reporting the Global War on
        Terrorism: Cases from Nigeria. Fort Hare Papers, 17(1), 137-167`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 24,
        title: `Nwadike, F. & Ekeanyanwu, N. T. (2011)`,
        body: ` Teaching Speech Communication in a
        Black College: Does Technology Really Make a Difference? US-CHINA
        Education Review, 1(2), 195-202`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 25,
        title: `Usaini, S. and Ekeanyanwu, N. T. (2011)`,
        body: ` Perceived Role of Entertainment Television
        in Shaping Social Behaviour of Teenagers. The Nigerian Journal of
        Communication, 9(1), 67-90.`,
        download: `<a class="btn inverse" href="../../Document/PUBLICATIONS/Perceived Role of Entertainment Television on the Behaviour of Teenagers.pdf"download="../../Document/PUBLICATIONS/Perceived Role of Entertainment Television on the Behaviour of Teenagers.pdf" title="Download ">Download</a>`
    },
    {
        id: 26,
        title: `Obanua, A. S., Ekeanyanwu, N. T., & Okorie, N. (2011)`,
        body: ` Information Literacy, ICT
        and Today’s Work Place: A 21st Century Synergy? Indian Journal of Media
        Studies, 5(1), 1-9`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 27,
        title: `Obanua, A. S. & Ekeanyanwu, N. (2010`,
        body: `The Theory of Triadic Influence, Media
        Literacy, Adolescents and Alcohol Advertising in Lagos State. International
        Journal of Social Sciences and Humanities Review, 1(3), 34-39`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 28,
        title: `Igbinoba, A. O. & Ekeanyanwu, N. T. (2010)`,
        body: ` Reporting Sexuality Issues: Cases from
        the Nigerian Press. International Journal of Social Sciences and Humanities
        Review, 2(4), 110-123`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 29,
        title: `Ekeanyanwu, N. T. & Olaniyan, O. (2010)`,
        body: ` Newspaper coverage of people’s
        perception of President Yar’Adua’s pre-election campaigns. Journal of
        Communication and Media Research, 1(3), 79-92`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 30,
        title: `Okorie, N., Ekeanyanwu, N. T., & Obanua, A. S. (2010)`,
        body: ` The Influence of Facebook
        Usage on Self Disclosure and Romantic Relationship among Young Nigerians.
        Indian Journal of Media Studies, 4(1), 31-43`,
        download: `<a class="btn inverse" href="../../Document/PUBLICATIONS/NIGERIAN PRESS COVERAGE OF POLITICAL CONFLICTS IN A PLURALISTIC SOCIETY.pdf" download="../../Document/PUBLICATIONS/NIGERIAN PRESS COVERAGE OF POLITICAL CONFLICTS IN A PLURALISTIC SOCIETY.pdf" title="Download ">Download</a>`
    },
    {
        id: 31,
        title: `Ekeanyanwu, N. T. (2009)`,
        body: ` Nollywood, New Communication Technologies and
        Indigenous Cultures in a Globalized World: The Nigerian Dilemma.
        International Journal of Social Sciences and Management, 2(2), 62-84`,
        download: `<a class="btn inverse" href="../../Document/PUBLICATIONS/Nollywood, New Communication Technologies and Indigenous Cultures in a Globalized World The Nigerian Dilemma.pdf"download="../../Document/PUBLICATIONS/Nollywood, New Communication Technologies and Indigenous Cultures in a Globalized World The Nigerian Dilemma.pdf" title="Download ">Download</a>`
    },
    {
        id: 32,
        title: `Ekeanyanwu, N. T. & Edewor, P. (2009)`,
        body: ` Cultural Implications of ICTs and
        Globalization in the Nigerian Society. Journal of Communication and Media
        Research, 1(2), 13-29`,
        download: `<a class="btn inverse" href="#"download="" title="Download">Download</a>`
    },
    {
        id: 33,
        title: `Ekeanyanwu, N. T. (2009)`,
        body: ` Indigenous Cultures the in Era of Globalization: A Case
        Against Cultural Imperialism Theory. Communicare: Journal for
        Communication Sciences in Southern Africa, 28(1), 126-143`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 34,
        title: `Ekeanyanwu, N. T. & Olaitan, J. (2009)`,
        body: ` Analysis of the Editorial Content of Nigerian
        National Newspapers. Oko Journal of Communication and Information Sciences,
        1(2), 73-103`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 35,
        title: `Ekeanyanwu, N. T. & Odukomaiya, S. (2008)`,
        body: ` Indigenous Culture, Communication
        and Globalization in Developing Societies: A Case for Cultural Development
        Hypothesis. International Journal of Communication, 8 (1), 102-123`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 36,
        title: `Ekeanyanwu, N. T. & Igbinoba, A. (2007)`,
        body: ` The Media and Cultism in Nigerian
        Higher Institutions of Learning: A Study of Coverage, Treatment and Relevance.
        International Journal of Communication, 6(1), 370-388`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 37,
        title: `Ekeanyanwu, N. T. (2007)`,
        body: ` The Nigerian Press Coverage of Political Conflicts in a
        Pluralistic Society. Global Media Journal: African Edition 1(1), 64-91. doi:
        10.5789/1-1-46`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 38,
        title: `Ekeanyanwu, N. T. (2007)`,
        body: ` Global News Flow Controversy: Is The South Also Guilty?
        International Journal of Communication, 7(1), 13-42`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 39,
        title: `Ekeanyanwu, N. T. (2006)`,
        body: ` The Nigerian Mass Media and Global Political Reportage:
        Coverage/Treatment of the 2004 United States Presidential Elections. Journal of
        Communication Studies, 5(1), 15-30`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 40,
        title: `Ekeanyanwu, N. T. (2017)`,
        body: ` Editor, University of Uyo Journal of Humanities
        , Vol. 21, No. 2, October 2017 <a  href="https://www.uujh.org">visit</a>`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 41,
        title: `Ekeanyanwu, N. T. (2018)`,
        body: ` Editor, University of Uyo Journal of Humanities
        , Vol. 22, No. 1, May 2018 <a href="https://www.uujh.org">visit</a>`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 42,
        title: `Ekeanyanwu, N. T. (2018)`,
        body: `Editor, University of Uyo Journal of Humanities
        <a href="https://www.uujh.org">visit</a> Vol. 22, No. 2, October 2018`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 43,
        title: `Ekeanyanwu, N. T. (2018)`,
        body: ` Editor, The Nigerian Journal of Communication,<a href="https://www.tnjc.org.ng">visit</a>  Vol. 15, No. 1, June 2018`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 44,
        title: `Ekeanyanwu, N. T. (2018)`,
        body: ` Editor, The Nigerian Journal of Communication, <a href="https://www.tnjc.org.ng">visit</a> Vol. 15, No. 2, November 2018`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 45,
        title: `Ekeanyanwu, N. T. (2019)`,
        body: ` Editor, University of Uyo Journal of Humanities  <a href="https://www.uujh.org">visit</a> Vol. 23, No. 1, May 2019`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 46,
        title: `Ekeanyanwu, N. T. (2019)`,
        body: ` Editor, University of Uyo Journal of Humanities <a href="https://www.uujh.org">visit</a> Vol. 23, No. 2, October 2019`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 47,
        title: ``,
        body: `Ekeanyanwu, N. T. (2019). Editor, The Nigerian Journal of Communication
        <a href="https://www.tnjc.org.ng">visit</a> Vol. 16, No. 1, June 2019`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 48,
        title: `Ekeanyanwu, N. T. (2019)`,
        body: ` Editor, The Nigerian Journal of Communication <a href="https://www.tnjc.org.ng">visit</a>
         Vol. 16, No. 2, November 2019`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 49,
        title: `Ekeanyanwu, N. T. (2020)`,
        body: ` Editor, University of Uyo Journal of Humanities <a href="https://www.uujh.org">visit</a>
         Vol. 24, No. 1, May 2020`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 50,
        title: `Ekeanyanwu, N. T. (2020)`,
        body: `Editor, University of Uyo Journal of Humanities <a href="https://www.uujh.org">visit</a>
         Vol. 24, No. 2, October 2020`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 51,
        title: `Ekeanyanwu, N. T. (2020)`,
        body: ` Editor, The Nigerian Journal of Communication <a href="https://www.tnjc.org.ng">visit</a>
         Vol. 17, No. 1, June 2020`,
        download: `<a class="btn inverse" href="#"download="" title="Download ">Download</a>`
    },
    {
        id: 52,
        title: `Ekeanyanwu, N. T. (2020)`,
        body: ` Editor, The Nigerian Journal of Communication <a href="https://www.tnjc.org.ng">visit</a>
         Vol. 17, No. 2, November 2020`,
        download: `<a class="btn inverse" href="#"download="" title="Download Cv">Download</a>`
    },

]

const journalMapping = () => {
    let journalDivEle = document.querySelector('.journalObj');
    let journalStr = "";
    journals.map((journalDisplay) => {
        const { title, body, download } = journalDisplay;
        journalStr +=
        `
        <li class="one_third">
        <article>
          <h6>${title}</h6>
            <p class="text-sm"> 
            ${body} 
            </p>
            <p class="downloadbtn"><a  href="#"download="" title="Download">${download}</a>
            </p>
        </article>
      </li>
        `
    })
    journalDivEle.innerHTML = journalStr;

}
journalMapping()