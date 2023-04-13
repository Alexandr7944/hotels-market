const About = () => {
  return (
    <div className='about' data-testid="admin-page">
      <p className='about-text'>
        Это приложение было разработано в учебных целях, в нем реализовано:
      </p>
      <ul className='about-list'>
        <li>Загрузка постов с сервера</li>
        <li>Создание новых постов</li>
        <li>Реализован фильтр и сортировка постов</li>
        <li>Реализована анимация при помощи "react-transition-group"</li>
      </ul>
    </div>
  )
}

export default About;