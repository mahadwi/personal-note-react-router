import React from 'react'
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import AddButton from '../components/AddButton';
import { getActiveNotes, getAllNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render(){
        const notes = this.state.notes.filter((note) => {
            return note.title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase());
        });

        return(
            <section>
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes={notes}/>
                <AddButton />
            </section>
        )
    }
}

export default HomePageWrapper;
