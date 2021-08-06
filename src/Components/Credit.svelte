<div class="credit">
    <div>
        <a href="https://github.com/tesfadan/todo2done" target="_blank">Github</a>
        <a href="https://twitter.com/tesfadan" target="_blank">Twitter</a>
    </div>
    <a href="https://tesfadan.com" target="_blank">tesfadan.com</a>
</div>

<style>
    .credit{
        padding: 32px;
        position: absolute;
        bottom: 0px;
        display: flex;
        width: -webkit-fill-available;
        justify-content: space-between;
        max-width: inherit;
    }

    a{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #CDCFE850;
        margin-right: 18px;
        text-decoration: none;
        transition: 0.07s ease-in;
    }

    a:hover{
        color: #F75465;
    }

    a:last-of-type{
        margin-right: 0px;
    }

    @media(max-width: 640px){
        .credit{
            padding: 24px;
        }
        a{
            font-size: 16px;
        }
    }

    @media(max-width: 520px){
        .credit{
            padding: 12px;
        }
       a{
            font-size: 14px;
        }
    }
</style>