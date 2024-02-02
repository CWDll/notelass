import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../../components/Component/Home/Style/GroupDetailStyle";
import instance from "../../../assets/api/axios";
import { useParams, useLocation } from "react-router-dom";


import BarLoader from "react-spinners/BarLoader";

function Synonym({ selectedWord }) {
    const { paramsGroupId, paramsUserId } = useParams();
    const location = useLocation();
    // console.log("location: ", location);
    const info = location.state;
    // console.log("info:", info);

    //유의어 추천 GET 함수
 
  const [synonyms, setSynonyms] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const [synonymsLoading, setSynonymsLoading] = useState(false);
  


  const fetchSynonyms = async (word) => {
    setSynonymsLoading(true);
    try {
      const response = await instance.get(`/api/synonym?word=${word}`);
      setSynonyms(response.data.result.slice(0, 4));
    } catch (error) {
      console.error("Error fetching synonyms:", error);
    } finally {
      setSynonymsLoading(false);
    }
  };

//   const handleWordSelection = (word) => {
//     setSelectedWord(word);
//     fetchSynonyms(word);
//   };
const closeContextMenu = () => {
    setContextMenu(null);
  };

useEffect(() => {
    if (selectedWord) {
      fetchSynonyms(selectedWord);
    }
  }, [selectedWord]);


  return (
    <>
    <div onClick={closeContextMenu}>
        <S.SynonymsDisplay>
              {selectedWord && (
                <>
                  <S.SynonymTitle>
                    <S.SelectedWord>'{selectedWord}'</S.SelectedWord> 비슷한 유의어
                  </S.SynonymTitle>
                  <div>
                    {synonymsLoading ? (
                      <div style={{ marginTop: "15px" }}>
                        <BarLoader
                          color="#4849ff"
                          loading={synonymsLoading}
                          height={4}
                          width={100}
                        />
                      </div>
                    ) : (
                      synonyms.map((synonym, index) => (
                        <S.SynonymWord key={index}>{synonym}</S.SynonymWord>
                      ))
                    )}
                  </div>
                </>
              )}
            </S.SynonymsDisplay>
            </div>
    </>
);
};

export default Synonym;