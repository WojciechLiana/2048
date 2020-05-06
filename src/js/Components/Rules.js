import React from "react";

function Rules() {
    return (
        <div className='rules'>
            <div className='rulesFrame'>
                <div>Move numbers in the right directions to reach 2048.</div>
                <div>Reseting game equals lose.</div>
                <div>Full board and no possibility to move equals lose.</div>
                <figure>
                    <figcaption>Navigation:</figcaption>
                    <ul>
                        <li>arrow buttons</li>
                        <li>W, S, A, D keys</li>
                        <li>arrows in bottom panel</li>
                    </ul>
                </figure>
            </div>
        </div>
    );
}

export default Rules;