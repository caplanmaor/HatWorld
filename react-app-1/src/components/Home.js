import Catalog from "./Catalog";

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted id="video">
        <source
          className="video"
          src="https://video-hatworld.s3.eu-central-1.amazonaws.com/ConcertBG.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaDGV1LWNlbnRyYWwtMSJIMEYCIQDjqI%2BLkNy9ursNn3SZ1i%2FmgDvQjQItb46O5LjpAZru8QIhALoY5pADXC2gb8cGMoH9%2FuGpMx2sTc8%2Bi%2BuX9%2FC3ngr%2FKuQCCBMQARoMMDgyMzQ1Nzk5NzA2IgyM%2FrfXkgkW8RwTWvQqwQKV2g4scJK%2FGNF2t635XWCWPCDpkv1%2FJYoVpjJgAWc0q5d8BUyvpclTkOzfBZZk4PbFACNkUklyadFTNU4QKwKX0tdc8y3HK1wylbQ6T5i5cIT%2F5c1fhWmkJTrNbJaE51ygzGpuj7MODHMo14%2BcJWzfMS9U%2By1n5MOsOUb06vo2ek%2BJV2tvV31%2F7LNCDAfeSiB9iIJATDqw%2FevfpXeHBhYJZS15O9fd4Rr7YBfWDiqZQjy9z2gz8iCCPKFyBs3rJyk7WKFm7aWzs3znXB9i37CqH8hzdkcvx%2B9ngOu7jqNDhyPM4%2Blv%2BczcbNQ9tvAeQmanF%2FlI6S5VTDviSQ7C%2BvVxQ059csmL%2BX3BPQpW4lNamAYU4q1%2BET%2BHRkDoufD6HsE9tKQLhz1lX8ie0jcbZSditJY0fd0cHcluLrlf1%2FK81ZkwqeiVkgY6sgLuq5ybWFUaoYiXXcEzz7zp%2B2%2BhtXd8q81HMNlqBsGH9nCJU%2FEOsWKvpxocJ3%2FSFLGy%2FVhDujDZkfZ3O2LVZaHKYpuTIrlxoomkEbW3f5M%2FIT9wJm7%2F5%2BUgUd9qOjG5JpYxct1%2BoBxUleB3FWOU2KJX%2F%2Fl%2FPYraKjfH97kzN6wIKiZIQPrCdhc5Gn%2Bz7ecRONp3GsiKPZnOIUaE7IYQavYfHlSgHWWLU%2FVLbQHedlWsXEvfITvZDvPLQBey0N%2FUataSpUV7A7oyP2z1pVr9gN5KiJyyUquOmyV8UMfd21PmhqM%2BBlC90BIQghGRabpBeQR06fJKMH9WPmQxgCXbnw5TJMXFhSaSH9ve%2BKtjS%2BAy5CCP17mw9VJ1%2BDFMlWEVGJive9irUXoJT9czaRN5OkfUwlg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220331T101604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIARGLBRGANDL3NC63F%2F20220331%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=74a6d92201a4af6f93273de44d093de4386c3b1061ce82b75f956bdc5d4b335e"
          type="video/mp4"
        />
      </video>
      <Catalog />
    </div>
  );
}

export default Home;
