const posts = [
    'https://playitforward.microgaming.co.uk/post/Elite-marathon-runner-Ollie-Lockley-named-latest-Microgaming-PlayItForward-Ambassador'
]
describe(`Wordpress Post XML from URL`, () => {
  it(`Go To Post`, () => {

    const url = new URL(posts[0])
    cy.visit(url.toString()).then(() => {
      cy.get('.mgs-date.blog-date').then($el => {
        const [day, month, year] = $el.get(0).innerText.split('.');
        const post = {
          url: url.toString(),
          title: '',
          date: new Date(`${month}-${day}-${year}`)
        };
        const xml = `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${post.url.href}</link>
            <pubDate>${post.date.toUTCString()}</pubDate>
            <dc:creator><![CDATA[craigiswayne]]></dc:creator>
            <guid isPermaLink="false">${post.url}</guid>
            <description></description>
            <content:encoded><![CDATA[${post.content}]]></excerpt:encoded>
            <wp:post_id>100</wp:post_id>
            <wp:post_date><![CDATA[${post.data.toISOString()}]]></wp:post_date>
            <wp:post_date_gmt><![CDATA[${post.data.toISOString()}]]></wp:post_date_gmt>
            <wp:post_modified><![CDATA[${post.data.toISOString()}]]></wp:post_modified>
            <wp:post_modified_gmt><![CDATA[${post.data.toISOString()}]]></wp:post_modified_gmt>
            <wp:comment_status><![CDATA[closed]]></wp:comment_status>
            <wp:ping_status><![CDATA[closed]]></wp:ping_status>
            <wp:post_name><![CDATA[${post.url.pathname.replace('/','')}]]></wp:post_name>
            <wp:status><![CDATA[publish]]></wp:status>
            <wp:post_type><![CDATA[post]]></wp:post_type>
        </item>`
        console.log(xml);
      });
    });
  });
});
