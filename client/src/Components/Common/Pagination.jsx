import React, { useCallback } from 'react';
import { times } from 'lodash';

export const Pagination = (props) => {
  const { active, size, step, onClickHandler, onNext, onPrev, onPage } = props;

  const showingNumbers = step * 2 + 1;
  let startNumber = 2;
  let startArrayNumber = props.step;

  let needStartDots = false;
  let needEndDots = false;

  if (active > step) {
    startArrayNumber = active - step;

    needStartDots = active > step + startNumber ? true : false;
  }

  if (size > showingNumbers) {
    needEndDots = size > active + step + 1 ? true : false;

    if (size < active + step + 1) {
      startArrayNumber = size - showingNumbers;
    }
  }

  let contentNumber;

  const setPrev = useCallback(() => {
    onClickHandler(active - 1);
    onPrev(active - 1);
  }, [active, onClickHandler, onPrev]);

  const setNext = useCallback(() => {
    onClickHandler(active + 1);
    onNext(active + 1);
  }, [active, onClickHandler, onNext]);

  const setPage = useCallback(
    (e) => {
      onClickHandler(e.currentTarget.textContent);
      onPage(e.currentTarget.textContent);
    },
    [onClickHandler, onPage]
  );

  return (
    <nav className='m-b-30' aria-label='Page navigation example'>
      <nav
        className='pagination justify-content-center pagination-primary'
        aria-label='Page navigation example'
      >
        <ul className='pagination'>
          {active > 1 ? (
            <li className='page-item' onClick={setPrev}>
              <a href='#javascript' className='page-link'>
                Prev
              </a>
            </li>
          ) : (
            <li className='page-item prev arrow-icon disabled'>
              <a href='#javascript' className='page-link'>
                Prev
              </a>
            </li>
          )}
          {size > showingNumbers + startNumber ? (
            <React.Fragment>
              <li
                onClick={setPage}
                className={`page-item ${active === 1 && 'active'}`}
              >
                <a href='#javascript' className='page-link'>
                  1
                </a>
              </li>

              {needStartDots && (
                <a href='#javascript' className='page-link'>
                  ...
                </a>
              )}
              {times(showingNumbers, (i) => (
                <li
                  key={i++}
                  {...(contentNumber = needStartDots
                    ? startArrayNumber
                    : startNumber)}
                  {...startNumber++}
                  {...startArrayNumber++}
                  className={`page-item ${
                    active === contentNumber && 'active'
                  }`}
                  onClick={setPage}
                >
                  <a href='#javascript' className='page-link'>
                    {contentNumber}
                  </a>
                </li>
              ))}
              {needEndDots && (
                <a href='#javascript' className='page-link'>
                  ...
                </a>
              )}
              <li
                className={`page-item ${active === size && 'active'}`}
                onClick={setPage}
              >
                <a href='#javascript' className='page-link'>
                  {size}
                </a>
              </li>
            </React.Fragment>
          ) : (
            ((startArrayNumber = 1),
            times(size, (i) => (
              <li
                key={i++}
                className={`page-item ${
                  active === startArrayNumber && 'active'
                }`}
                onClick={setPage}
              >
                <a href='#javascript' className='page-link'>
                  {startArrayNumber++}
                </a>
              </li>
            )))
          )}
          {active < size ? (
            <li className='page-item next arrow-icon' onClick={setNext}>
              <a href='#javascript' className='page-link'>
                Next
              </a>
            </li>
          ) : (
            <li className='page-item next arrow-icon disabled'>
              <a href='#javascript' className='page-link'>
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </nav>
  );
};
