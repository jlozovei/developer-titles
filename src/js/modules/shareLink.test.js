import shareLink from './shareLink';

describe('shareLink', () => {
  it('Should generate the share link correctly', () => {
    const titleName = 'SR Share link developer';
    const link = shareLink(titleName);
    const decoded = decodeURI(link);

    expect(decoded).toBe(
      `https://twitter.com/intent/tweet?url=https://developertitles.com/&text=I'm the "${titleName}". Check your title at Developer Titles&related=juliolozovei&hashtags=developer,developertitles`
    );
  });
});
